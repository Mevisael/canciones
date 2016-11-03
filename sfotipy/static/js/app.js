$(function(){
    $("#frmBuscar").submit(function(e){

        e.preventDefault();

        $.post('/search_tracks/', $(this).serialize(), function(data){

            $('#cuerpo').empty();
            data.forEach(function(track){
                $('#cuerpo').append(track.fila);
            });

        },'json');


    });
});



$(function(){
    $('#search').keyup(function(){

        $.ajax({
            type: "POST",
            url: "/search/",
            data: {
                'search_text' : $('#search').val(),
                'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
            },
            success: searchSuccess,
            dataType: 'html'
        });

    });
});


function searchSuccess(data, textStatus, jqXHR)
{
    $('#search_results').html(data);
}

var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('#audio');
    playlist = $('.playlist');
    tracks = playlist.find('td a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}


function run(link, player){
    $('#search').val('');
    $('#search').keyup();
        player.src = link.attr('href');
     escuchando = $('#escucha');

     $.notify('Escuchando: ' + link.attr('nametrack'), "success");
     escuchando.text('Escuchando: ' + link.attr('nametrack'));
     $('#portada').attr('src',link.attr('namealbum'));

        par = link.parent();
        par.addClass('active').nextAll().removeClass('active');
        par.prevAll().removeClass('active');

        audio[0].load();
        audio[0].play();
}


  

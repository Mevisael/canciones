#coding: utf8
from django.shortcuts import render, redirect
from django.shortcuts import render_to_response
from django.views.generic import ListView, DetailView
from django.http import HttpResponse, HttpResponseRedirect
from .forms import RegistroUserForm
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
# Create your views here.
from .forms import RegistroUserForm, PlayListForm, EditarContrasenaForm
from .models import UserProfile, Track, PlayList, Track, Gender, Album,Artist
import json

@login_required
def index_view(request):
    return render(request, 'Gender_Track.html')

@login_required
def agregar_playlist(request):
    form = PlayListForm()
    data = {'form': form, 'accion':'insert'}
    return render(request, 'form_playlist.html',data)

def playlist_seguidas(request,idu):
    form = PlayList(user=idu)
    data = {'form': form, 'accion':'insert'}
    return render(request, 'form_playlist.html',data)


@login_required
def agregar_cancion(request,idc,idl):
    play = PlayList.objects.get(pk = idl)
    trac = Track.objects.get(pk=idc)
    play.track.add(trac)

    return HttpResponseRedirect("/")

@login_required
def quitar_cancion(request,idc,idl):
    play = PlayList.objects.get(pk = idl)
    trac = Track.objects.get(pk=idc)
    play.track.remove(trac)

    return HttpResponseRedirect("/")

@login_required
def insert_playlist(request):
    if request.method == 'POST':
        form = PlayListForm(data=request.POST)
        owner = User.objects.get(pk = request.POST.get("owner"))
        if form.is_valid():
            playl = PlayList(nameplaylist=request.POST.get("nameplaylist"), owner=owner)
            playl.save()
            playl.pk
            return HttpResponseRedirect("/track/" + str(playl.pk) )
        else:
            return render(request, 'form_playlist.html',{'form':form},)

@login_required
def update_playlist(request):
    if request.method == 'POST':
        idplaylist = request.POST.get('pk')
        playlist = PlayList.objects.get(pk=idplaylist)
        form = PlayListForm(request.POST,instance=playlist)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse(cargar_playlist, args=[idplaylist]))
        else:
            data = {'form': form, 'accion': 'update'}
            return render(request, 'form_playlist.html',data)

@login_required
def cargar_playlist(request,idl):
    playlist = get_object_or_404(playlist, pk=cod_playlist)
    form = PlayListForm(instance = playlist)
    data = {'form': form, 'accion':'update'}
    return render(request,'form_playlist.html',data)

@login_required
def search_track(request):
    return render(request, 'search_track.html')

def search(request):
    owner = User.objects.get(pk = request.user.id)
    if request.method == 'POST':
        if request.POST['search_text'] != '':
            search_text = request.POST['search_text']
        else:
            search_text = 'sdfsdfsdf'
    else:
        search_text = 'sdfsdfsdfsd'

    articles = Track.objects.filter(nametrack__contains=search_text)

    return render_to_response('search.html', {'articles' : articles, 'user':owner})

# def busqueda(request):
#     if request.is_ajax():
#         proyectos = Track.objects.filter(nametrack__startswith= request.GET['nombre'] ).values('nametrack', 'id')
#         return HttpResponse( json.dumps( list(proyectos)), content_type='application/json' ) 
#     else:
#         return HttpResponse("Solo Ajax");

def logout_view(request):
    logout(request)
    messages.success(request, 'Te has desconectado con exito.')
    return HttpResponseRedirect('/login/')

def login_view(request):
    # Si el usuario esta ya logueado, lo redireccionamos a index_view
    if request.user.is_authenticated():
         return HttpResponseRedirect('/')

    mensaje = ''
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect(reverse('index'))
            else:
                # Redireccionar informando que la cuenta esta inactiva
                # Lo dejo como ejercicio al lector :)
                pass
        mensaje = 'Nombre de usuario o contraseña no valido'
    return render(request, 'login.html', {'mensaje': mensaje})

@login_required()
def TrackView(request, idl):
    playlist= PlayList.objects.get(pk = idl) 
    tracks = Track.objects.exclude(playlist=idl)
    return render(request, 'track.html', {'tracks':tracks ,'playlist':playlist, 'idl':idl})


@login_required()
def AddTrackView(request, idl):
    playlist= PlayList.objects.get() 
    tracks = Track.objects.exclude(playlist=idl)
    return render(request, 'track.html', {'tracks':tracks ,'playlist':playlist, 'idl':idl})
@login_required()
def track_artist(request, ida): 
    tracks = Track.objects.filter(artist=ida)
    return render(request, 'track_artist.html', {'tracks':tracks, 'ida':ida})

@login_required()
def track_album(request, ida): 
    tracks = Track.objects.filter(album=ida)
    return render(request, 'track_album.html', {'tracks':tracks})

@login_required()
def playlist_track(request, idl):
    playlist= PlayList.objects.get(pk = idl) 
    tracks = Track.objects.filter(playlist=idl)
    return render(request, 'playlist_track.html', {'tracks':tracks ,'playlist':playlist, 'idl':idl})

class UsuariosView(ListView):
	template_name = 'listausuario.html'
	model = UserProfile
	# en lugar de que diga object_list en la plantilla
	context_object_name = "users"

class CancionView(ListView):
    template_name = 'Gender_Track.html'
    model = Gender
    # en lugar de que diga object_list en la plantilla
    context_object_name = "gender"

def registro_usuario_view(request):
    if request.method == 'POST':
        form = RegistroUserForm(request.POST, request.FILES)
    else:
        form = RegistroUserForm()
    context = {
        'form': form
    }
    return render(request, 'registro.html', context)

def registro_usuario_view(request):
    if request.method == 'POST':
        # Si el method es post, obtenemos los datos del formulario
        form = RegistroUserForm(request.POST, request.FILES)

        # Comprobamos si el formulario es valido
        if form.is_valid():
            # En caso de ser valido, obtenemos los datos del formulario.
            # form.cleaned_data obtiene los datos limpios y los pone en un
            # diccionario con pares clave/valor, donde clave es el nombre del campo
            # del formulario y el valor es el valor si existe.
            cleaned_data = form.cleaned_data
            username = cleaned_data.get('username')
            password = cleaned_data.get('password')
            avatar = cleaned_data.get('avatar')
            # E instanciamos un objeto User, con el username y password
            user_model = User.objects.create_user(username=username, password=password)
            # Añadimos el email
            # Y guardamos el objeto, esto guardara los datos en la db.
            user_model.save()
            # Ahora, creamos un objeto UserProfile, aunque no haya incluido
            # una imagen, ya quedara la referencia creada en la db.
            user_profile = UserProfile()
            # Al campo user le asignamos el objeto user_model
            user_profile.user = user_model
            # y le asignamos la avatar (el campo, permite datos null)
            user_profile.avatar = avatar
            # Por ultimo, guardamos tambien el objeto UserProfile
            user_profile.save()
            # Ahora, redireccionamos a la pagina accounts/gracias.html
            # Pero lo hacemos con un redirect.
            return HttpResponseRedirect('/')
    else:
        # Si el mthod es GET, instanciamos un objeto RegistroUserForm vacio
        form = RegistroUserForm()
    # Creamos el contexto
    context = {'form': form}
    # Y mostramos los datos
    return render(request, 'registro.html', context)

@login_required()
def UserView(request, idu):
    owner = User.objects.get(pk = idu)
    listas = PlayList.objects.filter(owner = owner)

    profile = UserProfile.objects.get(user = request.user)
    suscrito = PlayList.objects.filter(user = profile, owner = owner)

    return render(request, 'user.html', {'listas':listas, 'owner':owner, 'profile' : profile})

@login_required()
def GenderView(request, idg):
    genero= Gender.objects.get(pk = idg)
    album=Album.objects.filter(gender=genero)
    art = Artist.objects.filter(gender=genero)
    return render(request, 'index.html', {'album':album, 'artist':art})\

@login_required()
def PerfilView(request):
    profile = UserProfile.objects.get(user = request.user)
    return render(request, 'Perfil.html', {'profile':profile})
    
@login_required()
def seguir_lista(request, idl):
    playlist = PlayList.objects.get(pk = idl)
    profile = UserProfile.objects.get(user = request.user)

    playlist.user.add(profile)

    return HttpResponseRedirect('/')

@login_required()
def quitar_lista(request, idl):
    playlist = PlayList.objects.get(pk = idl)
    profile = UserProfile.objects.get(user = request.user)

    playlist.user.remove(profile)

    return HttpResponseRedirect('/')

#class search_genero(ListView):
 #   template_name = 'search_genero.html'
 #   model = Gender
    # en lugar de que diga object_list en la plantilla
 #   context_object_name = "gender")


def search_Album(request):
    
    return render(request, 'search_Album.html')

@login_required()
def search_tracksAlbum(request):
    if request.is_ajax():
        if request.method == 'POST':
            result = []
            alb=Album.objects.get(namealbum__startswith = request.POST.get('busqueda'))

            tracks = Track.objects.filter(album=alb)

            for track in tracks:
                resp = {'fila': '<td><img src="/media/%s" alt="" width="30" height="30"><a href="/media/%s" nametrack="%s - %s" namealbum = "/media/%s">%s - %s</a></td><td>%s</td><td></td>' % (track.album.cover, track.filetrack, track.nametrack, track.artist.nameartist, track.album.cover, track.nametrack, track.artist.nameartist, track.album.namealbum)}
                result.append(resp)

            return HttpResponse(json.dumps(result), content_type='application/json')

def search_Artista(request):
    
    return render(request, 'search_Artista.html')

@login_required()
def search_tracksArtista(request):
    if request.is_ajax():
        if request.method == 'POST':
            result = []
            art=Artist.objects.get(nameartist__startswith = request.POST.get('busqueda'))

            tracks = Track.objects.filter(artist=art)

            for track in tracks:
                resp = {'fila': '<td>%s</td><td>%s</td><td>%s</td>' % (track.nametrack, track.album.namealbum, track.artist.nameartist)}
                result.append(resp)

            return HttpResponse(json.dumps(result), content_type='application/json')

@login_required()
def editar_contrasena(request):
    if request.method == 'POST':
        form = EditarContrasenaForm(request.POST)
        if form.is_valid():
            request.user.password = make_password(form.cleaned_data['password'])
            request.user.save()
            messages.success(request, 'La contraseña ha sido cambiado con exito!.')
            messages.success(request, 'Es necesario introducir los datos para entrar.')
            return HttpResponseRedirect('/')
    else:
        form = EditarContrasenaForm()
    return render(request, 'editarcontrasena.html/', {'form': form})
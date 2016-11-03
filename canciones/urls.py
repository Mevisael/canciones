from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from sfotipy import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'canciones.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index_view, name='index'),
    url(r'^usuarios/$', views.UsuariosView.as_view()),
    url(r'^cancion/$', views.CancionView.as_view()),
    url(r'^user/(?P<idu>\d+)/$', views.UserView, name='UserView'),
    url(r'^registro/$', views.registro_usuario_view, name='accounts.registro'),
    url(r'^login/$', views.login_view, name='accounts.login'),
    url(r'^logout/$', views.logout_view, name='accounts.logout'),
    url(r'^track/(?P<idl>\d+)/$', views.TrackView, name='tracks'),
    url(r'^track/$', views.AddTrackView, name='AddTrackView'),
    url(r'^track_album/(?P<ida>\d+)/$', views.track_album, name='track_album'),
    url(r'^track_artist/(?P<ida>\d+)/$', views.track_artist, name='track_artist'),
    url(r'^Gender/(?P<idg>\d+)/$', views.GenderView, name='GenderView'),
    url(r'^playlist_track/(?P<idl>\d+)/$', views.playlist_track, name='playlist_track'),
    url(r'^seguir_lista/(?P<idl>\d+)/$', views.seguir_lista, name='seguir_lista'),
    url(r'^quitar_lista/(?P<idl>\d+)/$', views.quitar_lista, name='quitar_lista'),
    (r'^search/$', views.search),
    url(r'^search_track/$', views.search_track),
    url(r'^agregar_cancion/(?P<idc>\d+)/(?P<idl>\d+)/$', views.agregar_cancion, name='agregar_cancion'),
    url(r'^quitar_cancion/(?P<idc>\d+)/(?P<idl>\d+)/$', views.quitar_cancion, name='quitar_cancion'),
    url(r'^agregar_playlist/$', views.agregar_playlist, name='agregar_playlist'),
    url(r'^update_playlist/$', views.update_playlist, name='update_playlist'),
    url(r'^insert_playlist/$', views.insert_playlist, name='insert_playlist'),
    url(r'^search_tracksAlbum/$', views.search_tracksAlbum, name='search_tracksAlbum'),
    url(r'^search_Album/$', views.search_Album, name='search_Album'),
    url(r'^search_tracksArtista/$', views.search_tracksArtista, name='search_tracksArtista'),
    url(r'^search_Artista/$', views.search_Artista, name='search_Artista'),
    url(r'^editar_contrasena/$', views.editar_contrasena, name='accounts.editar_contrasena'),
    url(r'^perfil/$', views.PerfilView, name='PerfilView'),


    #url(r'^busqueda/$', busqueda, name='busqueda'), 
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += patterns('',
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


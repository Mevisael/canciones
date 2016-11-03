from django.contrib import admin

# Register your models here.
from .models import UserProfile, Artist, Album, Track, PlayList, Gender, UserSongCount

admin.site.register(UserProfile)
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Track)
admin.site.register(PlayList)
admin.site.register(Gender)
admin.site.register(UserSongCount)
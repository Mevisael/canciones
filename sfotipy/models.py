from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, null=True)
	email = models.EmailField()
	avatar = models.ImageField(upload_to='sfotipy', default='userdefault.png')
	
	def __str__(self):
		return self.user.username

class Artist(models.Model):
	nameartist = models.TextField(max_length=50)
	biography = models.TextField(max_length=300)

	def __unicode__(self):
		return self.nameartist

class Album(models.Model):
	artist = models.ForeignKey(Artist)
	namealbum = models.TextField(max_length=50)
	cover = models.ImageField(upload_to='sfotipy', default='coverdefault.png')

	def __unicode__(self):
		return self.namealbum

class Track(models.Model):
	artist = models.ForeignKey(Artist)
	album = models.ForeignKey(Album)
	nametrack = models.TextField(max_length=50)
	filetrack = models.FileField()
	order = models.IntegerField(default=0)

	def __unicode__(self):
		return self.nametrack

class PlayList(models.Model):
	track = models.ManyToManyField(Track, blank=True)
	user = models.ManyToManyField(UserProfile, blank=True)
	nameplaylist = models.TextField(max_length=50)
	owner = models.ForeignKey(User, null = True)

	def __unicode__(self):
		return self.nameplaylist

class Gender(models.Model):
	album = models.ManyToManyField(Album)
	artist = models.ManyToManyField(Artist)
	namegender = models.TextField(max_length=50)

	def __unicode__(self):
		return self.namegender

class UserSongCount(models.Model):
	user = models.ForeignKey(UserProfile)
	track = models.ForeignKey(Track)
	count = models.IntegerField(default=0)
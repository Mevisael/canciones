# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sfotipy', '0006_auto_20151119_1336'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('namealbum', models.TextField(max_length=50)),
                ('cover', models.ImageField(default=b'coverdefault.png', upload_to=b'sfotipy')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nameartist', models.TextField(max_length=50)),
                ('biography', models.TextField(max_length=300)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Gender',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('namegender', models.TextField(max_length=50)),
                ('album', models.ManyToManyField(to='sfotipy.Album')),
                ('artist', models.ManyToManyField(to='sfotipy.Artist')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='PlayList',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nameplaylist', models.TextField(max_length=50)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nametrack', models.TextField(max_length=50)),
                ('filetrack', models.FileField(upload_to=b'')),
                ('order', models.IntegerField(default=0)),
                ('album', models.ForeignKey(to='sfotipy.Album')),
                ('artist', models.ForeignKey(to='sfotipy.Artist')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserSongCount',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('count', models.IntegerField(default=0)),
                ('track', models.ForeignKey(to='sfotipy.Track')),
                ('user', models.ForeignKey(to='sfotipy.User')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='playlist',
            name='track',
            field=models.ManyToManyField(to='sfotipy.Track'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='playlist',
            name='user',
            field=models.ManyToManyField(to='sfotipy.User'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='album',
            name='artist',
            field=models.ForeignKey(to='sfotipy.Artist'),
            preserve_default=True,
        ),
    ]

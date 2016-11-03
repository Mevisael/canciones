# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sfotipy', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='artist',
        ),
        migrations.RemoveField(
            model_name='gender',
            name='album',
        ),
        migrations.RemoveField(
            model_name='gender',
            name='artist',
        ),
        migrations.DeleteModel(
            name='Gender',
        ),
        migrations.RemoveField(
            model_name='playlist',
            name='track',
        ),
        migrations.RemoveField(
            model_name='playlist',
            name='user',
        ),
        migrations.DeleteModel(
            name='PlayList',
        ),
        migrations.RemoveField(
            model_name='track',
            name='album',
        ),
        migrations.DeleteModel(
            name='Album',
        ),
        migrations.RemoveField(
            model_name='track',
            name='artist',
        ),
        migrations.DeleteModel(
            name='Artist',
        ),
        migrations.RemoveField(
            model_name='usersongcount',
            name='track',
        ),
        migrations.DeleteModel(
            name='Track',
        ),
        migrations.RemoveField(
            model_name='usersongcount',
            name='user',
        ),
        migrations.DeleteModel(
            name='UserSongCount',
        ),
    ]

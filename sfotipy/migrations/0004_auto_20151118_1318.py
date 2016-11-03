# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sfotipy', '0003_auto_20151118_1308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='namealbum',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='artist',
            name='nameartist',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='gender',
            name='namegender',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='nameplaylist',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='track',
            name='nametrack',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.TextField(max_length=50),
        ),
    ]

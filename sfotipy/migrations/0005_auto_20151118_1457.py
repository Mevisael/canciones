# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sfotipy', '0004_auto_20151118_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='cover',
            field=models.ImageField(default=b'coverdefault.png', upload_to=b'sfotipy'),
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sfotipy', '0007_auto_20151119_1336'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user',
            field=models.OneToOneField(null=True, to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
    ]

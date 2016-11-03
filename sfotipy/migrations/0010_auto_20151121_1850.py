# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sfotipy', '0009_remove_user_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.EmailField(max_length=75)),
                ('avatar', models.ImageField(default=b'userdefault.png', upload_to=b'sfotipy')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='user',
            name='user',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(null=True, to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='playlist',
            name='user',
            field=models.ManyToManyField(to=b'sfotipy.UserProfile'),
        ),
        migrations.AlterField(
            model_name='usersongcount',
            name='user',
            field=models.ForeignKey(to='sfotipy.UserProfile'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]

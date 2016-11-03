#coding: utf8
from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User
from .models import PlayList
from django.forms import ModelForm, EmailInput, TextInput

class RegistroUserForm(forms.Form):

    username = forms.CharField(min_length=1, widget=forms.TextInput(attrs = {'class' : 'form-control'}))
    password = forms.CharField(min_length=1, widget=forms.PasswordInput(attrs = {'class' : 'form-control'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs = {'class' : 'form-control'}))
    avatar = forms.ImageField(required=True)

    def clean_username(self):
        """Comprueba que no exista un username igual en la db"""
        username = self.cleaned_data['username']
        if User.objects.filter(username=username):
            raise forms.ValidationError('Nombre de usuario ya registrado.')
        return username

    def clean_password2(self):
        """Comprueba que password y password2 sean iguales."""
        password = self.cleaned_data['password']
        password2 = self.cleaned_data['password2']
        if password != password2:
            raise forms.ValidationError('Las contraseñas no coinciden.')
        return password2

class PlayListForm(ModelForm):
    class Meta():
        model = PlayList
        exclude = ('track', 'user', 'owner')
        widgets = {
            'nameplaylist': TextInput(attrs={'class': 'form-control'}) 
        }

class EditarContrasenaForm(forms.Form):
    actual_password = forms.CharField(
        label='Contraseña actual',
        min_length=1,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password = forms.CharField(
        label='Nueva contraseña',
        min_length=1,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2 = forms.CharField(
        label='Repetir contraseña',
        min_length=1,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}))

def clean_password2(self):
    """Comprueba que password y password2 sean iguales."""
    password = self.cleaned_data['password']
    password2 = self.cleaned_data['password2']
    if password != password2:
        raise forms.ValidationError('Las contraseñas no coinciden.')
    return password2
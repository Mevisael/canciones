from .models import PlayList, UserProfile

def playlist_user(request):
	if request.user.is_authenticated():
		profile = UserProfile.objects.get(user = request.user)
		playlist_user = PlayList.objects.filter(user = profile)
		return {'playlist_user': playlist_user}
	else:
		return {}

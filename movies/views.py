from django.http import HttpResponse
from django.shortcuts import render
from .models import Movie

# Create your views here.


def index(request):
    movies = Movie.objects.all()
    # output = ', '.join([m.title for m in movies])

    return render(request, 'movies/index.html', {'movies': movies})
    # return HttpResponse(output)


def detail(request, movie_id):
    movie = Movie.objects.get(pk=movie_id)
    return render(request, 'movies/detail.html', {'movie': movie})

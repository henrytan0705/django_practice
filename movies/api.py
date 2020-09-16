from rest_framework import viewsets, permissions
from movies.models import Movie, Genre
from .serializers import MovieSerializer, GenreSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GenreSerializer

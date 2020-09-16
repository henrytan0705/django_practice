from rest_framework import viewsets, permissions
from movies.models import Movie
from .serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer

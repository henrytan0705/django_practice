from movies.models import Movie
from rest_framework import viewsets, permissions
from .serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    querySet = Movie.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer

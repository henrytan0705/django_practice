# from django.urls import path, include
# from . import views

# app_name = 'movies'

# urlpatterns = [
#     # path('', views.index, name='index'),
#     # path('<int:movie_id>', views.detail, name='detail')
#     path('', include('frontend.urls'))
# ]


from rest_framework import routers
from .api import MovieViewSet

router = routers.DefaultRouter()
router.register('api/movies', MovieViewSet, 'movies')

urlpatterns = router.urls

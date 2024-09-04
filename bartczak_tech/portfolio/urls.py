# Desc: URL configuration for the portfolio app


from django.urls import path

from .views import home
from .views import project_detail

app_name = "portfolio"
urlpatterns = [
    path("", home, name="home"),
    path("project/<int:project_id>/", project_detail, name="project_detail"),
]

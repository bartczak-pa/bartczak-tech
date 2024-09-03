# Desc: URL configuration for the portfolio app


from django.urls import path

from .views import home

app_name = "portfolio"
urlpatterns = [
    path("", home, name="home"),
]

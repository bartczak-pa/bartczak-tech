from django.shortcuts import render

from .models import Hobby
from .models import Project


def home(request):
    hobbies = Hobby.objects.all()
    projects = Project.objects.all()

    context = {
        "hobbies_list": hobbies,
        "projects_list": projects,
    }

    return render(request, "portfolio/portfolio.html", context)

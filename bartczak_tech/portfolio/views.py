from django.http import JsonResponse
from django.shortcuts import get_object_or_404
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


def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    data = {
        "name": project.name,
        "short_description": project.short_description,
        "description": project.description,
        "image_url": project.image.url if project.image else "",
        "technologies": [technology.name for technology in project.technologies.all()],
        "github_link": project.github_link,
        "project_link": project.project_link,
        "project_link_text": project.project_link_text,
    }
    return JsonResponse(data)

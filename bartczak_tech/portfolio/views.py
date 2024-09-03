from django.shortcuts import render

from .models import Hobby


def home(request):
    hobbies = Hobby.objects.all()

    context = {
        "hobbies_list": hobbies,
    }

    return render(request, "portfolio/portfolio.html", context)

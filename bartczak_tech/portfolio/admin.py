from django.contrib import admin

from .models import Hobby
from .models import Technology

admin.site.register(Hobby)
admin.site.register(Technology)

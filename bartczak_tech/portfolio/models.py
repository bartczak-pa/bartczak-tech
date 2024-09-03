from django.db import models


class Hobby(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    icon = models.CharField(max_length=50, default="fas fa-code")
    link = models.URLField(max_length=200, blank=True)
    link_text = models.CharField(max_length=30, blank=True)

    class Meta:
        verbose_name_plural = "Hobbies"

    def __str__(self) -> str:
        return self.name


class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        verbose_name_plural = "Technologies"

    def __str__(self) -> str:
        return self.name

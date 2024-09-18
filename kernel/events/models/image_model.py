# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import gettext_lazy as _

from .event_model import Events


class Image(models.Model):
    """
    Модель изображений
    """
    event = models.ForeignKey(
        to=Events,
        on_delete=models.CASCADE
    )
    image = models.ImageField(
        verbose_name=_("Изображение")
    )

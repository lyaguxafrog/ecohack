# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import gettext_lazy as _


class Events(models.Model):
    """
    Модель событий

    * title: Заголовок события
    * description: Описание события
    * rating: Рейтинг события
    """
    title = models.CharField(
        verbose_name=_("Заголовок"),
        max_length=256
    )
    description = models.CharField(
        verbose_name=_("Описание"),
        max_length=1024
    )
    rating = models.FloatField(
        verbose_name=_("Рейтинг"),
        max_length=5.0
    )
    # TODO: organizators and guests

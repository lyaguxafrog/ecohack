# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import gettext_lazy as _

from events.models import Events


class Reviews(models.Model):
    """
    *title: Заголовок отзыва
    *description: Описание отзыва
    *event: событие, к которому прикреплен отзыв
    """

    description = models.TextField(
        verbose_name=_("Описание отзыва"),
        max_length=1024,
        null=True
    )
    rate = models.FloatField(
        verbose_name=_("Оценка события"),
        default=5.0
    )
    event = models.ForeignKey(
        to=Events,
        on_delete=models.CASCADE
    )
    # TODO: author

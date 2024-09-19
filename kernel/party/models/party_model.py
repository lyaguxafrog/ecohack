# -*- coding: utf-8 -*-


from django.db import models
from django.utils.translation import gettext_lazy as _


class Party(models.Model):

    party_owner = models.ForeignKey(
        "auth.User",
        related_name="party_owmer",
        on_delete=models.CASCADE,
        verbose_name=_("Лидер группы")
    )

    soopartyes = models.ManyToManyField(
        "auth.User",
        verbose_name=_("Участники группы")
    )

    invite_code = models.CharField(
        max_length=16,
        null=False, blank=False,
        verbose_name=_("Код группы")
    )

    event = models.ForeignKey(
        "events.Events",
        on_delete=models.SET_NULL,
        null=True, blank=True,
        verbose_name=_("Ивент")
    )

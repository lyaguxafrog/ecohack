# -*- coding: utf-8 -*-


from django.db import models
from django.utils.translation import gettext_lazy as _


class Profile(models.Model):
    """
    * user: Пользователь auth.User
    * phone: Номер телефона
    * avatar: Аватар пользователя
    """

    user = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь")
    )

    phone = models.CharField(
        max_length=11,
        verbose_name=_("Номер телефона пользователя"),
        help_text=_("Номер телефона в формате 79998881010")
    )

    avatar = models.ImageField(
        null=True,
        verbose_name=_("Аватар пользователя")
    )

    def username(self) -> str:
        return f'{self.user.username}'

    def first_name(self) -> str:
        return f'{self.user.first_name}'

    def last_name(self) -> str:
        return f'{self.user.last_name}'

    def email(self) -> str:
        return f'{self.user.email}'

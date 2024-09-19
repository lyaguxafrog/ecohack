# -*- coding: utf-8 -*-


from django.db import models
from django.utils.translation import gettext_lazy as _


class Profile(models.Model):
    """
    * user: Пользователь auth.User
    * avatar: Аватар пользователя
    * role: Роль пользователя
    * date_of_birth: Дата рождения
    """

    user = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь")
    )

    avatar = models.ImageField(
        null=True,
        verbose_name=_("Аватар пользователя")
    )

    role = models.IntegerField(
        choices=[
            (0, 'user'),
            (1, 'oragizator'),
            (2, 'depart')
        ],
        default=0,
        verbose_name=_("Роль пользователя"),
        help_text=_("0 - пользователь, 1 - организатор, 2 - департамент")
    )

    date_of_birth = models.DateField(
        verbose_name=_("Дата рождения"),
        null=True, blank=True
    )

    def phone(self) -> str:
        return f'{self.user.username}'

    def first_name(self) -> str:
        return f'{self.user.first_name}'

    def last_name(self) -> str:
        return f'{self.user.last_name}'

    def email(self) -> str:
        return f'{self.user.email}'

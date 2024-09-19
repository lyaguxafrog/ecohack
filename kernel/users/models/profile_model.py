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

    # date_of_birth = models.DateField(
    #     verbose_name=_("Дата рождения"),
    # )

    @property
    def phone(self) -> str:
        return self.user.username

    @property
    def first_name(self) -> str:
        return self.user.first_name.__str__()

    @property
    def last_name(self) -> str:
        return self.user.last_name.__str__()

    @property
    def email(self) -> str:
        return self.user.email.__str__()

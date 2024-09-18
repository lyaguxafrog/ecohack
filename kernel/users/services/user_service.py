# -*- coding: utf -*-

from datetime import date

from django.db.transaction import atomic
from django.contrib.auth.models import User

from users.models import Profile


@atomic
def create_user(
    phone: str,
    first_name: str,
    last_name: str,
    date_of_birth: date,
    role: int = 0,
) -> Profile:
    """
    Сервис создания пользователя

    :param phone: Номер телефона пользователя
    :param first_name: Имя пользователя
    :param last_name: Фамилия пользователя
    :param role: Роль пользователя
    """

    if User.objects.filter(username=phone).exists():
        raise Exception("Phone already taken")

    user = User.objects.create(
        username=phone,
        # TODO: Сделать пермишн на определенные действия
        #    user_permissions=
        first_name=first_name,
        last_name=last_name
    )

    if role > 0:
        user.is_staff = True
        user.save()

    profile = Profile.objects.create(
        user=user,
        role=role,
        date_of_birth=date_of_birth
    )

    return profile

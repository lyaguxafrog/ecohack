# -*- coding: utf -*-

from datetime import date
from typing import Optional

from django.db.transaction import atomic
from django.contrib.auth.models import User, Permission

from users.models import Profile


@atomic
def create_user(
    phone: str,
    first_name: str,
    last_name: str,
    # date_of_birth: date,
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
        first_name=first_name,
        last_name=last_name
    )

    if role == 0:
        user.is_staff = False
        user.save()

    if role == 1:
        add_events = Permission.objects.get(codename="add_events")
        edit_events = Permission.objects.get(codename="change_events")
        delete_events = Permission.objects.get(codename="delete_events")
        user.user_permissions.add(add_events)
        user.user_permissions.add(edit_events)
        user.user_permissions.add(delete_events)

    if role == 2:
        user.is_staff = True
        user.save()

    # if not date_of_birth:
    #     date_of_birth_ = None
    # else:
    #     date_of_birth_ = date_of_birth
    profile = Profile.objects.create(
        user=user,
        role=role,
        # date_of_birth=date_of_birth
    )

    return profile

# -*- coding: utf -*-

import random
import string

from django.db.transaction import atomic
from django.contrib.auth.models import User

from party.models import Party


def generate_random_string(length: int = 16) -> str:
    """
    Генерирует случайную строку из букв и цифр заданной длины.

    :param length: Длина генерируемой строки (по умолчанию 16).

    :returns: Случайная строка из букв и цифр.
    """
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


@atomic
def create_party(
    party_owner: User
) -> Party:
    """
    Сервис создания пати

    :param party_owner: Владелец пати

    :returns: Объект пати
    """

    code = generate_random_string()

    party = Party.objects.create(
        party_owner=party_owner,
        invite_code=code
    )

    return party


@atomic
def delete_my_party(
    party_owner: User
) -> bool:
    """
    Сервис распуска пати

    :param party_owner:

    :returns: bool на успех
    """

    if not Party.objects.filter(party_owner=party_owner).exists():
        return False

    party = Party.objects.get(party_owner=party_owner)
    party.delete()

    return True

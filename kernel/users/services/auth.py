# -*- coding: utf-8 -*-

import os
from requests import request

from graphql_jwt.utils import jwt_payload, jwt_encode

from django.conf import settings
from django.core.cache import cache
from django.contrib.auth.models import User

from users.models import Profile


def gen_jwt(
    user: User
) -> str:
    """
    Сервис генерации JWT токена

    :param user: Пользователь

    :returns: JWT токен
    """

    payload = jwt_payload(
        user=user,
        context={
            'phone': user.username,
            'role': Profile.objects.get(user=user).role
        }
    )

    token = jwt_encode(
        payload,
        settings.SECRET_KEY
    )

    return token


def send_request_to_login_bot(
    phone: str,
) -> str:
    """
    Сервис отправки запроса в LoginBot

    :param phone: Номер телефона пользователя

    :returns: Номер телефона на который нужно позвонить
    """

    token = os.getenv("LOGIN_BOT")
    API_URL: str = f"https://api.loginbot.ru/api/v1/{token}/call/auth/{phone}?timeout={settings.LOGIN_TIMEOUT}"

    reqq_ = request(
        method='post',
        url=API_URL
    )

    reqq = reqq_.json()

    cache.set(
        key=f'user:{phone}',
        value=str(reqq.get('requestId')),
        timeout=180
    )

    return reqq.get('callToPhone')


def check_auth_phone(
    phone: str
) -> bool:
    """
    Сервис для проверки номера телефона после авторизации

    :param phone: Номер телефона для проверки

    :returns: Булевое значение авторизации
    """

    req_id = cache.get(f'user:{phone}')

    token = os.getenv("LOGIN_BOT")
    API_URL: str = f"https://api.loginbot.ru/api/v1/{token}/call/status/{req_id}"

    reqq_ = request(
        method='get',
        url=API_URL
    )

    reqq = reqq_.json()
    if reqq.get('status') == 'accepted':
        return True
    else:
        return False

# -*- coding: utf-8 -*-

from typing import Optional
from datetime import datetime

from django.db.transaction import atomic
from django.db.models import QuerySet
from django.core.cache import cache
from django.contrib.auth.models import User

from events.models import Events


@atomic
def create_event(
    title: str,
    organizer: User,
    date: Optional[datetime] = None,
    description: Optional[str] = None,
    longtitude: Optional[str] = None,
    latitude: Optional[str] = None
) -> Events:
    """
    Сервис для создания события

    :param title: Заголовок события
    :param description: Описание события
    :param longtitude: Широта
    :paran latitude: Долгота
    """

    try:
        cache.delete(key='events')
        event = Events.objects.create(
            title=title,
            description=description,
            longtitude=longtitude,
            latitude=latitude,
            date=date,
            organizer=organizer
        )
    except Exception as err:
        raise Exception(err)

    return event


@atomic
def delete_event(
    event_id: str
) -> bool:
    """
    Сервис для удаления события

    :param event_id: id в бд объекта события
    """

    try:
        event: Events = Events.objects.get(pk=event_id)
        cache.delete(key='events')
        event.objects.delete()
    except Exception as err:
        raise Exception(err)
    return True


@atomic
def edit_event(
    event_id: str,
    *args,
    **kwargs
) -> Events:
    """
    Сервис для редактирования существующего события
    """
    try:
        event: Events = Events.objects.get(pk=event_id)
        _kwargs = kwargs.get('kwargs')
        print(_kwargs, args)
        for attr_name, value in _kwargs.items():
            print('attr_name= ', attr_name, 'value= ', value)
            setattr(event, attr_name, value)
            print('attr saved')

        event.save()
        print('event saved')
        return event
    except Exception as err:
        raise Exception(err)


def get_events() -> QuerySet:
    """
    Функция для получения всех событий
    """
    cache_ = cache.get(key='events')

    if cache_:
        cache.set(
            key='events',
            value=cache_,
            timeout=1209600
        )
        return cache_
    else:
        events = Events.objects.filter(is_archive=False).all()
        cache.set(
            key='events',
            value=events,
            timeout=1209600
        )
        return events


@atomic
def register_to_event(
    user: User,
    event: Events
) -> bool:
    """
    Сервис регистрации на ивент


    :param user: Пользователь
    :param event: Ивент

    :returns: Бул на успешность
    """

    try:
        event.guests.add(user)
        event.save()

        return True
    except Exception as err:
        raise Exception(err)

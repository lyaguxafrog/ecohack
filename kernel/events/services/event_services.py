# -*- coding: utf-8 -*-

from typing import Optional

from django.db.transaction import atomic
from django.db.models import QuerySet
from django.core.cache import cache

from events.models import Events


@atomic
def create_event(
    title: str,
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
            latitude=latitude
        )
    except Exception as err:
        raise Exception(err)

    return event


@atomic
def delete_event(
    event: Events
) -> bool:
    """
    Сервис для удаления события

    :param event: Объект события
    """

    try:
        cache.delete(key='events')
        event.objects.delete()
    except Exception as err:
        raise Exception(err)
    return True


@atomic
def edit_event(
    event: Events,
    *args,
    **kwargs
) -> Events:
    """
    Сервис для редактирования существующего события
    """
    try:
        _kwargs = kwargs.get('kwargs')
        print('try')
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

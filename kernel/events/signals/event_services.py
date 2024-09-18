# -*- coding: utf-8 -*-

from typing import Optional

from django.db.transaction import atomic

from events.models import Events


@atomic
def create_event(
    title: str,
    description: Optional[str] = None
) -> Events:
    """
    Сервис для создания события

    :param title: Заголовок события
    :param description: Описание события
    """

    try:
        event = Events.objects.create(
            title=title,
            description=description
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
        event.objects.delete()
    except Exception as err:
        raise Exception(err)
    return True

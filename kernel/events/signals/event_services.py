# -*- coding: utf-8 -*-

from typing import Optional

from events.models import Events


def create_event(
    title: str,
    description: Optional[str] = None
) -> Events:
    try:
        Events.objects.create(
            title=title,
            description=description
        )
    except Exception as err:
        raise Exception(err)

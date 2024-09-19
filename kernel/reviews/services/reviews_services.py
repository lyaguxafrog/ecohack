# -*- coding: utf-8 -*-

from typing import Optional

from django.db.models import QuerySet
from django.db.transaction import atomic
from django.core.cache import cache
from django.contrib.auth.models import User

from reviews.models import Reviews
from events.models import Events


@atomic
def create_review(
    rate: float,
    event_id: str,
    author: User,
    description: Optional[str] = None
) -> Reviews:

    try:
        cache.delete(key='reviews')
        event = Events.objects.get(pk=event_id)
        review = Reviews.objects.create(
            description=description,
            rate=rate,
            event=event,
            author=author
        )
    except Exception as err:
        raise Exception(err)

    return review


@atomic
def get_reviews(event_id: str) -> QuerySet:
    cache_ = cache.get(key='reviews')
    if cache_:
        cache.set(
            key='reviews',
            value=cache_,
            timeout=1209600
        )
        return cache_
    else:
        event = Reviews.objects.get(pk=event_id)
        reviews = Reviews.objects.filter(event=event).all()
        cache.set(
            key='reviews',
            value=reviews,
            timeout=12096600
        )
        return reviews

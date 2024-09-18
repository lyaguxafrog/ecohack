# -*- coding: utf-8 -*-

from typing import Optional

from django.db.models import QuerySet
from django.db.transaction import atomic
from django.core.cache import cache

from reviews.models import Reviews
from events.models import Events


@atomic
def create_review(
    rate: float,
    event: Events,
    description: Optional[str] = None
) -> Reviews:

    try:
        cache.delete(key='reviews')
        review = Reviews.objects.create(
            description=description,
            rate=rate,
            event=event
        )
    except Exception as err:
        raise Exception(err)

    return review


@atomic
def get_reviews(event: Events) -> QuerySet:
    cache_ = cache.get(key='reviews')

    if cache_:
        cache.set(
            key='reviews',
            value=cache_,
            timeout=1209600
        )
        return cache_
    else:
        reviews = Reviews.objects.filter(event=event).all()
        cache.set(
            key='reviews',
            value=reviews,
            timeout=12096600
        )
        return reviews

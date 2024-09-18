# -*- coding: utf-8 -*-

from typing import Optional

from django.db.models import QuerySet
from django.db.transaction import atomic

from reviews.models import Reviews
from events.models import Events


@atomic
def create_review(
    rate: float,
    event: Events,
    description: Optional[str] = None
) -> Reviews:

    try:
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

    return Reviews.objects.filter(event=event).all()

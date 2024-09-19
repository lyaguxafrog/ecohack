# -*- coding: utf-8 -*-

import graphene
from graphene import List

from django.db.models import QuerySet

from events.models import Events
from reviews.services import get_reviews
from .nodes import ReviewNode


class Query(graphene.ObjectType):
    reviews = List(ReviewNode)

    def resolve_reviews(root, info, id=None):
        qs = get_reviews(id)
        return [ReviewNode(
            id=r.id,
            description=r.description,
            rate=r.rate,
            author=r.author
        ) for r in qs]

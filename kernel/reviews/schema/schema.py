# -*- coding: utf-8 -*-

from graphene import ObjectType


from .queries import Query as ReviewQuery

class Query(
    ReviewQuery,
    ObjectType,
):
    pass

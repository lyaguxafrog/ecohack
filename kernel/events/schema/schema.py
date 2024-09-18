# -*- coding: utf-8 -*-

from graphene import ObjectType

from .queries import Query as EventQuery


class Query(
    EventQuery,
    ObjectType,
):
    pass

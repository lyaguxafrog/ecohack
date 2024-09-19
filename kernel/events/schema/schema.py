# -*- coding: utf-8 -*-

from graphene import ObjectType

from .queries import Query as EventQuery
from .mutations import Mytation as EventMutations


class Query(
    EventQuery,
    ObjectType,
):
    pass


class Mutations(
    EventMutations,
    ObjectType,
):
    pass

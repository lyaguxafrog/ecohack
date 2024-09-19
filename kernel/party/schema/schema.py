# -*- coding: utf-8 -*-

from graphene import ObjectType

from .mutation import Mutation as PartyMutation

class Query(
    ObjectType,
):
    pass


class Mutation(
    PartyMutation,
    ObjectType
):
    pass

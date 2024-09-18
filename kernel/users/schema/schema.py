# -*- coding: utf-8 -*-

from graphene import ObjectType

from .mutations import Mutation as UserMutation

class Query(
    ObjectType,
):
    pass


class Mutation(
    UserMutation,
    ObjectType
):
    pass

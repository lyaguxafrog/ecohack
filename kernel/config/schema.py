# -*- coding: utf-8 -*-

import graphene
from graphene import ObjectType, Schema

from users.schema import Mutation as UserMutations

class Query(ObjectType):
    hello = graphene.String()

    def resolve_hello(root, info, **kwargs):
        return 'world!'


class Mutation(
    UserMutations,
    ObjectType
):
    pass


schema = Schema(
    query=Query,
    mutation=Mutation,
)

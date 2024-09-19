# -*- coding: utf-8 -*-

import graphene
from graphene import ObjectType, Schema

from users.schema import Mutation as UserMutations
from reviews.schema import Mutation as ReviewMutations
from events.schema import Query as EventQueries
from events.schema import Mutations as EventMutations


class Query(
    EventQueries,
    ObjectType,
):
    hello = graphene.String()

    def resolve_hello(root, info, **kwargs):
        return 'world!'


class Mutation(
    UserMutations,
    ReviewMutations,
    EventMutations,
    ObjectType
):
    pass


schema = Schema(
    query=Query,
    mutation=Mutation,
)

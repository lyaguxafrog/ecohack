# -*- coding: utf-8 -*-

import graphene
from graphene_django import DjangoConnectionField

from .nodes import EventTypeNode

from events.services import get_events


class Query(graphene.ObjectType):
    event_by_id = graphene.Field(
        type_=EventTypeNode,
        id=graphene.ID()
    )
    all_events = DjangoConnectionField(EventTypeNode)

    def resolve_event_by_id(root, info, id):
        return get_events().get(pk=id)

# -*- coding: utf-8 -*-

import graphene
from graphene import relay
from graphene_django import DjangoObjectType

from party.models import Party
from users.schema.nodes import ProfileNode
from events.schema.nodes import EventTypeNode


class PartyNode(DjangoObjectType):
    party_owner = graphene.Field(ProfileNode)
    soopartyes = graphene.List(ProfileNode)
    invite_code = graphene.String()
    event = graphene.Field(EventTypeNode)

    class Meta:
        model = Party
        interfaces = [relay.Node,]
        fields = [
            'party_owner',
            'soopartyes',
            'invite_code',
            'event'
        ]

        read_only_fields = [
            'invite_code'
        ]

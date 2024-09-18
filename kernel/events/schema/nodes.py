# -*- coding: utf-8 -*-

from graphene import relay
from graphene_django import DjangoObjectType
import django_filters

from events.models import Events


class EventTypeNode(DjangoObjectType):
    class Meta:
        model = Events
        filels = ["__all__"]
        interfaces = [relay.Node, ]


class EventFilter(django_filters.FilterSet):
    class Meta:
        model = Events
        fields = []
        ordering = [
            'date'
        ]

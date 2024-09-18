# -*- coding: utf-8 -*-

from graphene import relay
from graphene_django import DjangoObjectType
import django_filters

from reviews.models import Reviews


class ReviewNode(DjangoObjectType):
    class Meta:
        model = Reviews
        fields = ["__all__"]
        interfaces = [relay.Node, ]


class ReviewFilter(django_filters.FilterSet):
    class Meta:
        model = Reviews
        fields = []
        orgering = [
            'id'
        ]

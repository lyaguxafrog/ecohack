# -*- coding: utf-8 -*-


import graphene
from graphene import relay
from graphene_django import DjangoObjectType

from users.models import Profile


class RoleEnum(graphene.Enum):
    user = 0
    organizator = 1
    departament = 2


class ProfileNode(DjangoObjectType):
    class Meta:
        model = Profile
        interfaces = [relay.Node,]
        fields = [
            'phone',
            'email',
            'first_name',
            'last_name',
            'role',
            'date_of_birth'
        ]

        read_only_fields = [
            'phone'
        ]

    phone = graphene.String()
    email = graphene.String()
    first_name = graphene.String()
    last_name = graphene.String()
    role = graphene.Field(RoleEnum)

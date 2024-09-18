# -*- coding: utf-8 -*-


from typing import Optional, Any, Dict

import graphene
from graphene import ObjectType, relay

from django.contrib.auth.models import User
from django.core.cache import cache

from .nodes import ProfileNode
from users.services import (
    create_user,
    send_request_to_login_bot,
    check_auth_phone
)


class RegisterUserMutation(relay.ClientIDMutation):
    phone_to_call = graphene.String()

    class Input:
        phone = graphene.String(required=True)
        first_name = graphene.String()
        last_name = graphene.String()
        date_of_birth = graphene.Date()

    @staticmethod
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):

        if User.objects.filter(username=input['phone']).exists():
            raise ValueError("Phone number already taken")

        phone_to_call = send_request_to_login_bot(phone=input['phone'])
        cache.set(
            key=f'register:{input['phone']}',
            value={
                'phone': input['phone'],
                'first_name': input['first_name'],
                'last_name': input['last_name'],
                'date_of_birth': str(input['date_of_birth'])
            },
            timeout=300
        )

        return RegisterUserMutation(phone_to_call=phone_to_call)


class CheckAuthMutation(graphene.Mutation):

    class Arguments:
        phone = graphene.String()

    def mutate(self, info, phone):
        pass


class Mutation(
    ObjectType
):
    register_user = RegisterUserMutation.Field()

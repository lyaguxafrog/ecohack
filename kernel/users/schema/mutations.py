# -*- coding: utf-8 -*-

from datetime import date
from typing import Optional, Any, Dict

import graphene
from graphene import ObjectType, relay

import graphql_jwt
from graphql_jwt.decorators import set_cookie

from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.core.cache import cache

from .nodes import ProfileNode
from users.models import Profile
from users.services import (
    create_user,
    send_request_to_login_bot,
    check_auth_phone,
    gen_jwt
)


class RegisterUserMutation(relay.ClientIDMutation):
    phone_to_call = graphene.String()

    class Input:
        phone = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        date_of_birth = graphene.Date(requerid=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        date_of_birth = graphene.Date(required=False)

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


class SignInMutation(relay.ClientIDMutation):
    phone_to_call = graphene.String()

    class Input:
        phone = graphene.String(required=True)


    @staticmethod
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, Any]
    ):
        phone_to_call = send_request_to_login_bot(phone=input['phone'])

        return SignInMutation(phone_to_call=phone_to_call)



class CheckAuthMutation(relay.ClientIDMutation):
    profile = graphene.Field(ProfileNode)
    token = graphene.String()

    class Input:
        phone = graphene.String(required=True)

    @staticmethod
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, Any]
    ):

        if check_auth_phone(phone=input['phone']):
            _reg = cache.get(f'register:{input['phone']}')
            print(_reg)
            if _reg:
                profile = create_user(
                    phone=input['phone'],
                    first_name=_reg.get('first_name'),
                    last_name=_reg.get('last_name'),
                    date_of_birth=date.fromisoformat(_reg.get('date_of_birth'))
                )
                cache.delete(f'register:{input['phone']}')
            else:
                profile = Profile.objects.get(
                    user=User.objects.get(username=input['phone'])
                )

            print(profile.user)
            token = gen_jwt(profile.user)
            return CheckAuthMutation(profile=profile, token=token)



class Mutation(
    ObjectType
):
    register_user = RegisterUserMutation.Field()
    check_auth = CheckAuthMutation.Field()
    sign_in = SignInMutation.Field()

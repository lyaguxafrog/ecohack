# -*- coding: utf-8 -*-

from typing import Dict, Any

import graphene
from graphene import relay, ObjectType
from graphql_jwt.decorators import login_required
from graphql.error import GraphQLError

from django.core.exceptions import ValidationError

from .nodes import PartyNode
from party.services import create_party

class CreatePartyMutation(relay.ClientIDMutation):
    party = graphene.Field(PartyNode)

    @staticmethod
    @login_required
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, Any]
    ):

        try:
            party = create_party(
                party_owner=info.context.user
            )

        except ValidationError as errors:
            error_list = [str(error) for error in errors]
            raise GraphQLError(message='\n'.join(error_list))

        return CreatePartyMutation(party=party)


class Mutation(
    ObjectType
):
    create_party = CreatePartyMutation.Field()

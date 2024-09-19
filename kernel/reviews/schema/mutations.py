# -*- coding: utf-8 -*-

from typing import Dict, Any
import graphene
from graphene import relay, ObjectType
from graphql_jwt.decorators import (
    login_required
)

from .nodes import ReviewNode
from reviews.services import create_review


class CreateReviewMutation(relay.ClientIDMutation):
    review = graphene.Field(ReviewNode)

    class Input:
        description = graphene.String(required=False)
        rate = graphene.Float()
        event_id = graphene.ID()

    @staticmethod
    # @login_required
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, Any]
    ):
        try:
            review = create_review(
                description=input['description'],
                rate=input['rate'],
                event_id=input['event_id'],
                author=info.context.user
            )
        except Exception as err:
            raise Exception(err)

        return CreateReviewMutation(review=review)


class Mutation(
    ObjectType
):
    create_review = CreateReviewMutation.Field()

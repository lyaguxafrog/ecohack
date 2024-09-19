# -*- coding: utf-8 -*-

from typing import Dict, Any

from graphql_jwt.decorators import login_required, permission_required
import graphene

from graphene import ObjectType, relay
from graphene.relay.node import DefaultGlobalIDType
from django.core.exceptions import ValidationError
from graphql.error import GraphQLError

from events.models import Events
from events.services import (
    create_event,
    edit_event,
    delete_event,
    register_to_event
)
from .nodes import EventTypeNode
from utils import to_global_id


class CreateEventsMutation(relay.ClientIDMutation):
    object = graphene.Field(EventTypeNode)

    class Input:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        longtitude = graphene.String(required=True)
        latitude = graphene.String(required=True)
        date = graphene.DateTime(required=False)

    @staticmethod
    @permission_required(perm="events.add_events")
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):
        try:
            event = create_event(
                title=input['title'],
                date=input['date'],
                description=input['description'],
                longtitude=input['longtitude'],
                latitude=input['latitude'],
                organizer=info.context.user
            )

        except Exception as err:
            raise Exception(err)

        return CreateEventsMutation(object=event)


class EditEventMutation(relay.ClientIDMutation):
    event = graphene.Field(type_=EventTypeNode)

    class Input:
        event_id = graphene.ID(required=True)
        title = graphene.String(required=False)
        description = graphene.String(required=False)
        longtitude = graphene.String(required=False)
        latitude = graphene.String(required=False)
        date = graphene.DateTime(required=False)

    @classmethod
    @permission_required(perm="events.edit_events")
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):
        try:

            id = to_global_id(info, input['event_id'])

            event = edit_event(
                event_id=id,
                kwargs={
                    'title': input['title'],
                    'date': input['date'],
                    'description': input['description'],
                    'longtitude': input['longtitude'],
                    'latitude': input['latitude']
                }
            )
        except Exception as err:
            raise Exception(err)

        return EditEventMutation(event=event)


class DeleteEventMutation(relay.ClientIDMutation):
    message = graphene.String()

    class Input:
        event_id = graphene.ID()

    @classmethod
    @permission_required(perm="events.delete_events")
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):
        try:

            id = to_global_id(info, input['event_id'])
            delete_event(event_id=id)
            message = 'successful delete'
        except Exception as err:
            message = 'fail to delete'
            raise Exception(err)
        return DeleteEventMutation(message=message)


class RegisterToEventMutation(relay.ClientIDMutation):
    event = graphene.Field(EventTypeNode)

    class Input:
        event_id = graphene.ID(required=True)

    @staticmethod
    @login_required
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, Any]
    ):
        try:

            id = to_global_id(info, input['event_id'])

            event = register_to_event(
                user=info.context.user,
                event=Events.objects.get(id=id)
            )
        except ValidationError as errors:
            error_list = [str(error) for error in errors]
            raise GraphQLError(message='\n'.join(error_list))

        return RegisterToEventMutation(event=event)


class Mytation(
    ObjectType
):
    create_event = CreateEventsMutation.Field()
    edit_event = EditEventMutation.Field()
    delete_event = DeleteEventMutation.Field()
    register_to_event = RegisterToEventMutation.Field()

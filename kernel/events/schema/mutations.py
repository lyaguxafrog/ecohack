# -*- coding: utf-8 -*-

from typing import Dict, Any

from graphql_jwt.decorators import login_required, permission_required
import graphene
from graphene import ObjectType, relay

from events.services import create_event, edit_event, delete_event
from .nodes import EventTypeNode


class CreateEventsMutation(relay.ClientIDMutation):
    object = graphene.Field(EventTypeNode)

    class Input:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
        longtitude = graphene.String(required=False)
        latitude = graphene.String(required=False)
        date = graphene.DateTime(required=False)

    @staticmethod
    @login_required
    @permission_required(perm="auth.add_events")
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
    @login_required
    @permission_required(perm="auth.edit_events")
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):
        try:
            event = edit_event(
                event_id=input['event_id'],
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
    @login_required
    @permission_required(perm="auth.delete_events")
    def mutate_and_get_payload(
        root: Any,
        info: graphene.ResolveInfo,
        **input: Dict[str, any]
    ):
        try:
            delete_event(event_id=input['event_id'])
            message = 'successful delete'
        except Exception as err:
            message = 'fail to delete'
            raise Exception(err)
        return DeleteEventMutation(message=message)


class Mytation(
    ObjectType
):
    create_event = CreateEventsMutation.Field()
    edit_event = EditEventMutation.Field()
    delete_event = DeleteEventMutation.Field()

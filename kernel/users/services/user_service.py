# -*- coding: utf -*-


from django.db.transaction import atomic

from users.models import Profile


@atomic
def create_user():
    pass

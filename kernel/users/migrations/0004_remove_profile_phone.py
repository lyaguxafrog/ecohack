# Generated by Django 5.1.1 on 2024-09-18 10:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_profile_role"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="profile",
            name="phone",
        ),
    ]
# Generated by Django 5.1.1 on 2024-09-18 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0003_alter_events_description"),
    ]

    operations = [
        migrations.AddField(
            model_name="events",
            name="is_archive",
            field=models.BooleanField(default=False, verbose_name="архивно ли событие"),
        ),
    ]

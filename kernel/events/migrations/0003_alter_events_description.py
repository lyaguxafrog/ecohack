# Generated by Django 5.1.1 on 2024-09-18 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0002_alter_events_rating"),
    ]

    operations = [
        migrations.AlterField(
            model_name="events",
            name="description",
            field=models.CharField(max_length=1024, null=True, verbose_name="Описание"),
        ),
    ]
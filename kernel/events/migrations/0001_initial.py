# Generated by Django 5.1.1 on 2024-09-18 11:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Events",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=256, verbose_name="Заголовок")),
                (
                    "description",
                    models.CharField(max_length=1024, verbose_name="Описание"),
                ),
                ("rating", models.FloatField(max_length=5.0, verbose_name="Рейтинг")),
                ("date", models.DateTimeField(auto_now=True, verbose_name="")),
                ("longtitude", models.CharField(null=True, verbose_name="Долгота")),
                ("latitude", models.CharField(null=True, verbose_name="Широта")),
            ],
        ),
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="", verbose_name="Изображение")),
                (
                    "event",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="events.events"
                    ),
                ),
            ],
        ),
    ]

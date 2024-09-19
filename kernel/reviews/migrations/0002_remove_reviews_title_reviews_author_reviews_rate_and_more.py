# Generated by Django 5.1.1 on 2024-09-19 01:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name="reviews",
            name="title",
        ),
        migrations.AddField(
            model_name="reviews",
            name="author",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AddField(
            model_name="reviews",
            name="rate",
            field=models.FloatField(default=5.0, verbose_name="Оценка события"),
        ),
        migrations.AlterField(
            model_name="reviews",
            name="description",
            field=models.TextField(
                max_length=1024, null=True, verbose_name="Описание отзыва"
            ),
        ),
    ]
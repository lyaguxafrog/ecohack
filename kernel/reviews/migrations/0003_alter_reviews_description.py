# Generated by Django 5.1.1 on 2024-09-18 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0002_remove_reviews_title_reviews_rate"),
    ]

    operations = [
        migrations.AlterField(
            model_name="reviews",
            name="description",
            field=models.TextField(
                max_length=1024, null=True, verbose_name="Описание отзыва"
            ),
        ),
    ]

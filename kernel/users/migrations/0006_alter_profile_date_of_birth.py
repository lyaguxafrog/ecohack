# Generated by Django 5.1.1 on 2024-09-18 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_profile_date_of_birth"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="date_of_birth",
            field=models.DateField(verbose_name="Дата рождения"),
        ),
    ]

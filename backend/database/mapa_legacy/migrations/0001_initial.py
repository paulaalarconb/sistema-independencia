# Generated by Django 4.1.5 on 2023-03-13 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ModeloPrueba',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test', models.CharField(blank=True, max_length=50, null=True, verbose_name='test')),
            ],
            options={
                'verbose_name': 'Prueba',
            },
        ),
    ]

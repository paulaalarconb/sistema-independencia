# Generated by Django 4.1.5 on 2023-03-21 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapa_legacy', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='modeloprueba',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to='test/image'),
        ),
    ]

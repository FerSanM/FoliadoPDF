# Generated by Django 5.0.3 on 2024-04-07 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pdf',
            name='bibliografia',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='pdf',
            name='contenido',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='pdf',
            name='evaluacion',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='pdf',
            name='metodlogia',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='pdf',
            name='objetivos',
            field=models.TextField(blank=True),
        ),
    ]
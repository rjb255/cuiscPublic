from django.shortcuts import render
from django.http import HttpResponse
from os import path


def index(request):
    context = {"title": "Home"}

    return render(request, 'index.html', context)
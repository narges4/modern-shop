from operator import truediv
from django.shortcuts import render, get_object_or_404, redirect
from django.core.files.storage import FileSystemStorage
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User , Group , Permission
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.contenttypes.models import ContentType
from django.http import HttpResponse, JsonResponse
from MyStore.func.theme import *

from .forms import ContactForm







def home(request):
    return render(request, get_front_theme() + 'home.html', {})



def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # پردازش اطلاعات از فرم در این قسمت
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            # ارسال اطلاعات، ذخیره در پایگاه داده و غیره

            # مثال: بازگشت به صفحه‌ی موفقیت
            return render(request, 'success.html')
    else:
        form = ContactForm()

    return render(request, get_front_theme() + 'contact.html', {'form': form})
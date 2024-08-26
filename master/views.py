
from operator import truediv
from django.shortcuts import render, get_object_or_404, redirect
from django.core.files.storage import FileSystemStorage
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User , Group , Permission
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.contenttypes.models import ContentType
from django.http import HttpResponse, JsonResponse
from MyStore.func.theme import *

from .models import Category_First
from .forms import Category_FirstForm




from django.views.generic import TemplateView, ListView, CreateView
from .models import Product
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

class ProductListView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = get_master_theme() + 'product_list.html'

class ProductCreateView(CreateView):
    model = Product
    fields = ['name', 'price', 'description']
    success_url = reverse_lazy('product_list')

    def form_valid(self, form):
        print("111111111111111111111111111111")
        # در اینجا می‌توانید اقدامات اضافی را انجام دهید
        # در صورتی که نیازی به افزودن عملکرد اضافه دارید.
        response = super().form_valid(form)
        return response


class ProductView(TemplateView):
    template_name = get_master_theme() + 'product_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.all()
        context['form'] = ProductCreateView().get_form()
        return context

# class ProductListView(ListView):
#     model = Product
#     template_name = get_master_theme() + 'product_list.html'
#     context_object_name = 'products'


# class ProductCreateView(CreateView):
#     model = Product
#     fields = ['name', 'price', 'description']
#     template_name = get_master_theme() + 'product_form.html'
#     success_url = reverse_lazy('product_list')



def master_panel(request):
    return render(request, get_master_theme() + 'panel.html', {})



def master_categories_first_add(request):

    print("111111111111111111111111111111")

    form = Category_FirstForm()
    if request.method == 'POST':
        form = Category_FirstForm(request.POST)
        if form.is_valid():
            # عملیات مورد نظر با داده‌های فرم
            form.save()
            return redirect('master_categories_first_list')
    return render(request, get_master_theme() + 'categories_first.html', {'form': form})

def master_categories_first_list(request):
    return render(request, get_master_theme() + 'categories_first.html', {'categories': Category_First.objects.all()})
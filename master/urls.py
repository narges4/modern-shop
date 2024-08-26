from django.urls import path, include
from . import views
from .views import *

urlpatterns = [


    path('master/panel/', views.master_panel, name='master_panel'),
    path('master/categories/first/list/', views.master_categories_first_list, name='master_categories_first_list'), 
    path('master/categories/first/add/', views.master_categories_first_add, name='master_categories_first_add'), 
    path('master/ProductList/', ProductListView.as_view(), name='product_list'),
    # path('master/product/new/', ProductCreateView.as_view(), name='product_create'),


]   


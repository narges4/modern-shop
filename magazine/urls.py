from django.urls import path, include
from . import views

urlpatterns = [


    path('master/magazine/category/', views.master_magazine_category_views, name='master_magazine_category'), 
    path('master/magazine/category/add/', views.master_magazine_category_add_views, name='master_magazine_category_add'), 
    path('master/magazine/categories/', views.master_magazine_categories_views, name='master_magazine_categories'), 
    path('master/magazine/category/edit/<pk>/', views.master_magazine_category_edit_views, name='master_magazine_category_edit'),  
    path('master/magazine/category/delete/<pk>/<part>/', views.master_magazine_category_delete_views, name='master_magazine_category_delete'), 



    ]

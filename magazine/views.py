
from operator import truediv
from django.shortcuts import render, get_object_or_404, redirect
from django.core.files.storage import FileSystemStorage
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User , Group , Permission
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.contenttypes.models import ContentType
from django.http import HttpResponse, JsonResponse, Http404
from MyStore.func.theme import *
# Create your views here.
from .forms import MagazineCategoryForm
from .models import Magazine, MagazineCategory
from django.db.models import Q, Value
from django.core.paginator import Paginator, PageNotAnInteger, InvalidPage, EmptyPage


def master_magazine_category_views(request):  

    # try : setting = SiteSettings.objects.filter(pk=1001)
    # except : raise Http404 

    context = {"setting" : ""}
    return render(request, get_master_theme() + 'magazine_categories.html', context)


def master_magazine_category_add_views(request): 

    if request.method == 'POST' :  
        form = MagazineCategoryForm(request.POST, request.FILES, auto_id = 'add_id_%s')
        if form.is_valid(): 
            site_magazine_category = form.save(commit=False)
            if MagazineCategory.objects.filter(Q(title=site_magazine_category.title)).count() == 0 :  
                site_magazine_category.save() 
                return JsonResponse({'type':'success', 'msg':' افزودن دسته بندی جدید مجله ها با موفقیت انجام شد .',}) 
            return JsonResponse({'type':'danger', 'msg':' دسته بندی با عنوان موردنظر در سیستم ثبت شده است .',})  
        return JsonResponse({'type':'danger', 'msg':'لطفا موارد خواسته شده را وارد نمایید', 'errors':form.errors})
    else : 
        form = MagazineCategoryForm(auto_id = 'add_id_%s') 
        context = {'form' : form, 
                   'btn_footer_value' : 'ثبت', 
                   'modal_id' : 'MasterAddMagazineCategories', 
                   'auto_id_field_err' : '_add_id_', 
                   'form_url' : f'/master/magazine/category/add/', 
                   'title' : 'ثبت دسته بندی جدید مجله ها', }
        return render(request, get_master_theme() + 'modal_lg.html', context)




def master_magazine_categories_views(request):
    
    
    if request.method == 'POST':
 
        draw = request.POST.get('draw')
        start = request.POST.get('start')
        length = request.POST.get('length')
        search = request.POST.get('search[value]')
        if length is None or int(length) <= 0:
            length = 25
        if start is None or int(start) < 0:
            start = 0
        page_number = int(int(start)/int(length)) + 1
         
        obj = MagazineCategory.objects.all() 
        
        # if type is not None:
        #     obj = obj.filter(type=type)
        
        if search is not None:
            # obj = obj.annotate(fullname=Concat('user__first_name', Value(' '), 'user__last_name'))
            obj = obj.filter(Q(id__icontains=search) | Q(title__icontains=search))
            
        paginator = Paginator(obj, length) 
        try:
            querySet = paginator.page(page_number)
        except PageNotAnInteger:
            querySet = paginator.page(1)
        except EmptyPage:
            querySet = paginator.page(1)
        except InvalidPage:
            querySet = paginator.page(paginator.num_pages)
        except:
            querySet = paginator.page(1)
        li = []
        for x in querySet.object_list:
            if x.icon : icon = x.icon.url
            else : icon = '/static/master/assets/media/image/enterimage.png' 
            y = {}
            y = {'pk':x.pk, 
                 'title':x.title,
                 'icon' : icon, 
                 'rowclass':x.Status['rowclass'], 
                 'color':x.Status['color'],
                 'status':x.Status['status'],
                 'created_at':x.cdatejalali, 
                 'updated_at':x.udatejalali, 
                 }
            li.append(y)

        result = {
            "draw": draw,
            "recordsTotal": obj.count(),
            "recordsFiltered": obj.count(),
            "data": li
            }
        return JsonResponse(result)
    return JsonResponse({"draw": draw,"recordsTotal": 0,"recordsFiltered": 0,"data": []})


def master_magazine_category_edit_views(request, pk):
     

    try : magazine_category = MagazineCategory.objects.filter(pk=pk).last()
    except : raise Http404
    
    # try : app = AppKey.objects.get(pk=magazine_category.app.pk)
    # except : raise Http404
    
    if request.method == 'POST' :  
        form = MagazineCategoryForm(request.POST, request.FILES, instance = magazine_category, auto_id = 'edit_id_%s_' + pk)
        if form.is_valid(): 
            site_magazine_category = form.save(commit=False)
            if MagazineCategory.objects.filter(Q(title=site_magazine_category.title)).exclude(pk=magazine_category.pk).count() == 0 : 
                site_magazine_category.save() 
                # UserReport(owner = User.objects.filter(username=request.user).last(), 
                #             ip = get_client_ip(request),
                #             description = f"بروزرسانی دسته بندی مجله ها اپ/سایت."
                #             ).save() 
                return JsonResponse({'type' : 'success', 'msg' : ' بروزرسانی دسته بندی مجله ها با موفقیت انجام شد .',})
            return JsonResponse({'type' : 'danger', 'msg' : ' دسته بندی مجله ها با عنوان موردنظر در سیستم ثبت شده است .',}) 
        return JsonResponse({'type' : 'danger', 'msg' : 'لطفا موارد خواسته شده را وارد نمایید', 'errors' : form.errors, 'pk' : magazine_category.pk})
    else : 
        form = MagazineCategoryForm(instance = magazine_category, auto_id = 'edit_id_%s_' + pk)  
        context = {'form' : form, 
                   'type' : 'success', 
                   'btn_footer_value' : 'بروزرسانی', 
                   'modal_id' : 'MasterEditMagazineCategories', 
                   'auto_id_field_err' : '_edit_id_', 
                   'form_url' : f'/master/magazine/category/edit/{magazine_category.pk}/', 
                   'title' : f'بروزرسانی {magazine_category.title}', 
                   }
        return render(request, get_master_theme() + 'modal_lg.html', context)


def master_magazine_category_delete_views(request, pk, part):
    

    try : magazine_category = MagazineCategory.objects.get(pk=pk)
    except : raise Http404   
      
    if part == '1' :
        try : 
            magazine_category.delete()
            return JsonResponse({'type':'success', 'msg':'حذف مجله با موفقیت انجام شد .', }) 
        except : return JsonResponse({'type':'danger', 'msg':'حذف مجله با خطا مواجه شد .', })
    else :
        context = {'modal_id' : 'MasterDeleteMagazinesCategories', 
                   'type' : 'success',
                   'url' : f'/master/magazine/category/delete/{magazine_category.pk}/1/', 
                   'title' : f'حذف {magazine_category.title}', 
                   'object' : magazine_category, 
                   'description' : 'پس از حذف شدن قابل بازیابی نیست! ', }
        
        return render(request, get_master_theme() + 'modal_delete.html', context)

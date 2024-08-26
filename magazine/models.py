from django.contrib.auth.models import User, Permission
from django.db import models 
from master.models import *
import jdatetime 
from django.conf import settings
import uuid
from ckeditor.fields import RichTextField

# Create your models here.

def image_magazine_folder(instance, filename):
    return 'magazine/{0}.webp'.format(uuid.uuid4().hex)

ACCEPT_CHOICE = [
    (True, "تایید"),
    (False, "رد"),
] 

class MagazineCategory(models.Model):
    
    # owner = models.ForeignKey(Master, on_delete=models.CASCADE, null=True, blank=True)
    # app = models.ForeignKey(AppKey, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField("عنوان", max_length=250, null=True, blank=True)
    icon = models.ImageField("آیکن", upload_to=image_magazine_folder, null=True, blank=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField("تاریخ ایجاد", auto_now_add=True)
    updated_at = models.DateTimeField("تاریخ آپدیت", auto_now=True)
  
    @property
    def cdatejalali(self):
        try: 
            bdate_j_created = jdatetime.datetime.fromtimestamp(self.created_at.timestamp())
            created = bdate_j_created.strftime("%Y/%m/%d %H:%M:%S") 
        except:
            created = "" 
        return created

    @property
    def udatejalali(self): 
        try: 
            bdate_j_updated = jdatetime.datetime.fromtimestamp(self.updated_at.timestamp())
            updated = bdate_j_updated.strftime("%Y/%m/%d %H:%M:%S") 
        except:
            updated = "" 
        return updated

    @property
    def Status(self): 
        if self.active == True : return {'status':'فعال','color':'green', 'rowclass':'success'}
        if self.active == False : return {'status':'غیر فعال','color':'red', 'rowclass':'danger'}
        return {'status':'نامشخص','color':'blue'} 

    def __str__(self):
        return self.title

    def get_magazine(self):
        return self.magazine_set.all() 

    class Meta:
        verbose_name = 'Magazine Category'
        verbose_name_plural = 'Magazine Category'
        ordering = ['-pk']

class Magazine(models.Model):

    # owner = models.ForeignKey(Master, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField("عنوان", max_length=250, null=True, blank=True)
    category = models.ForeignKey(MagazineCategory, on_delete=models.CASCADE, null=True, blank=True, verbose_name="دسته بندی")
    short_description = models.TextField("توضیحات کوتاه", max_length=250, null=True, blank=True)
    description = RichTextField("توضیحات", blank=True, null=True)
    picture = models.ImageField("تصویر", upload_to=image_magazine_folder, null=True, blank=True)

    sort = models.SmallIntegerField("ترتیب", default=0)
    active = models.BooleanField(default=True)
    important = models.BooleanField("مهم", default=False)

    accept = models.BooleanField("نمایش", default=True, choices=ACCEPT_CHOICE)

    created_at = models.DateTimeField("تاریخ ایجاد", auto_now_add=True,)
    updated_at = models.DateTimeField("تاریخ آپدیت", auto_now=True,)

    @property
    def cdatejalali(self):
        try: 
            bdate_j_created = jdatetime.datetime.fromtimestamp(self.created_at.timestamp())
            created = bdate_j_created.strftime("%Y/%m/%d %H:%M:%S") 
        except:
            created = "" 
        return created

    @property
    def udatejalali(self): 
        try: 
            bdate_j_updated = jdatetime.datetime.fromtimestamp(self.updated_at.timestamp())
            updated = bdate_j_updated.strftime("%Y/%m/%d %H:%M:%S") 
        except:
            updated = "" 
        return updated

    @property
    def Status(self): 
        if self.active == True : return {'status':'فعال','color':'green', 'rowclass':'success'}
        if self.active == False : return {'status':'غیر فعال','color':'red', 'rowclass':'danger'}
        return {'status':'نامشخص','color':'blue'} 

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'مجله'
        verbose_name_plural = 'مجله ها'
        ordering = ['sort']

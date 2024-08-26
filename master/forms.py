from django import forms
from .models import Category_First



class Category_FirstForm(forms.ModelForm):
    class Meta:
        model = Category_First
        fields = ['name']
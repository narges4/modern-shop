from django_select2 import forms as s2forms 
from .models import Magazine, MagazineCategory
from django import forms  

class MagazineCategoryForm(forms.ModelForm): 
          
    class Meta:
        model = MagazineCategory
        fields = ['title', 'icon'] 
        widgets = {
            'icon' : forms.FileInput(), 
            }
        error_messages = {}
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['autocomplete'] = 'off'  
            field.widget.attrs['placeholder'] = field.label 
            self.fields['title'].required = 'required'  
    # required_css_class = 'required'

    def clean(self):
        cleaned_data = self.cleaned_data
        return cleaned_data
from django import forms















class ContactForm(forms.Form):
    email = forms.EmailField(label='آدرس ایمیل')
    message = forms.CharField(label='پیام', widget=forms.Textarea)
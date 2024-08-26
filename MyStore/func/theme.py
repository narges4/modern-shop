from MyStore.models import *


def get_front_theme():

    # Theme_Url = ""

    # if Site_Front_Template.objects.filter(theme_activation=True).count() == 1 :
        
    #     my_theme = Site_Front_Template.objects.get(theme_activation=True)
    #     Theme_Url = "front/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"
    #     return Theme_Url

    # my_theme = Site_Front_Template.objects.get(is_default_theme=True)
    # Theme_Url = "front/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"

    # return Theme_Url

    return "front/fa/theme-01/"


def get_customer_theme():

    # Theme_Url = ""

    # if Site_Customer_Template.objects.filter(theme_activation=True).count() == 1 :
        
    #     my_theme = Site_Customer_Template.objects.get(theme_activation=True)
    #     Theme_Url = "customer/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"
    #     return Theme_Url

    # my_theme = Site_Customer_Template.objects.get(is_default_theme=True)
    # Theme_Url = "customer/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"

    # return Theme_Url

    return "customer/fa/theme-01/"


def get_master_theme():

    # Theme_Url = ""

    # if Site_Master_Template.objects.filter(theme_activation=True).count() == 1 :
        
    #     my_theme = Site_Master_Template.objects.get(theme_activation=True)
    #     Theme_Url = "master/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"
    #     return Theme_Url

    # my_theme = Site_Master_Template.objects.get(is_default_theme=True)
    # Theme_Url = "master/" + my_theme.theme_lan + "/" + my_theme.theme_url + "/"

    # return Theme_Url

    return "master/fa/theme-01/"


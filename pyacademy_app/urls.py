from django.urls import path
from pyacademy_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('courses/', views.courses, name='courses'),
    path('contact_us/', views.contact_us, name='contact_us'),
    path('form/', views.form, name='form'),
    
]
#C:\Users\Fireb\OneDrive\Desktop\mySite\frontend\urls.py
from django.urls import path
from .views import index
urlpatterns = [
    path('', index)

]
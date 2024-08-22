from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    #referencing frontend -> index.html
    #takes request, takes template, and returns it
    return render(request,'frontend/index.html')
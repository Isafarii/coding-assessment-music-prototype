from django.db import models
import string
import random

# Create your models here.
def make_unique_code():
    length = 6

    while True:
        #make a bunch of codes until 'unique'
        codeStrings = ''.join(random.choices(string.ascii_uppercase, k=length))
        #keep generating unitil one is unique, double check:
        if Room.objects.filter(code=codeStrings).count() == 0:
            break
    
    return codeStrings

class Room(models.Model):
   # 'more' models, 'less' views 
    code = models.CharField(max_length=8,default="",unique=True)
    host = models.CharField(max_length=50,unique=True)
    guest_pausing = models.BooleanField(null=False,default=False)
    voteSkip = models.IntegerField(null=False,default=1)
    created_date = models.DateTimeField(auto_now_add=True)


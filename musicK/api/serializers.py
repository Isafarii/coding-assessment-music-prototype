from rest_framework import serializers
from .models import Room
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
      
        fields = ('id', 'code','host','guest_pausing','voteSkip','created_date')
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics,status
from rest_framework.response import Response
from .serializers import CreateRoomSerializer 
from .models import Room
# Create your views here.

class CreateRoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = CreateRoomSerializer

class ListRoomsView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = CreateRoomSerializer

class JoinRoomView(generics.GenericAPIView):
    serializer_class = CreateRoomSerializer
    def post(self,request,room_code,*args, **kwargs):
        try:
            room = Room.objects.get(code=room_code)
            return Response(CreateRoomSerializer(room).data,status=status.HTTP_200_OK)
        except Room.DoesNotExist:
            return Response({"Room does not exist!"}, status=status.HTTP_404_NOTE_FOUND)
class Validate_Code(APIView):
    def post(self, request, *args, **kwargs):
        room_code = request.data.get('room_code','')
        if Room.objects.filter(code=room_code).exists():
            return Response({"valid":True},status=status.HTTP_200_OK)
        else:
            return Response({"valid":False},status=status.HTTP_404_NOT_FOUND)
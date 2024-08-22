#C:\Users\Fireb\OneDrive\Desktop\mySite\musicK\api\urls.py
from django.urls import path
from .views import CreateRoomView, Validate_Code, ListRoomsView, JoinRoomView
urlpatterns = [
    #if we get '' url, so nothing
    #then call main function. 
    # return hello as http response
    #Endpoint1: '/api/room'
    path('room', CreateRoomView.as_view() ), #'post' for room creation
    path('rooms', ListRoomsView.as_view()), #'get' list of all rooms
    path('room/<room_code>/join', JoinRoomView.as_view() ),
    #example for room/<>/join: 'http://127.0.0.1:8000/api/room/ABCXYZ/join'
    #this uses get which causes error; but can use curl for viewing with post
    path('validateroom/', Validate_Code.as_view(), name='validateroom'),


]
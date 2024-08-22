This project is a simple music control panel web app that includes several API endpoints to analyze and interact with rooms. It is a prototype and is still in the works. 

It is built using Django for back-end and React for the front-end. The project structure in the front-end consists of React and has navigation to interact with API endpoints. The back-end is built using Django and the Django REST framework. It handles room creation, listing, as well as joining. 
In order to run the project, ensure you have Django installed and other dependencies such as Python, etc.

Navigate to the project directory: 

run the command to start the server: python manage.py runserver


Navigate to the front-end directory: 

run the following command to start the front-end development server: npm run dev 

There are three available endpoints:

Number 1 is to create a room: /api/room

Number 2 is to list rooms: /api/rooms

Number 3 is to join a room: /api/room/<ROOM_CODE>/join

Bugs:

Method not allowed; a method not allowed message will appear in the terminal if the user successfully inputs a successful existing code into endpoint 3 as it attempts to make a GET request to the endpoint. The endpoint is made to handle POST requests. For this project, this is for navigational reasons.
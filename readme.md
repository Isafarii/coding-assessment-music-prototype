# Music Control Panel Web App

This project is a simple music control panel web app that includes several API endpoints to analyze and interact with rooms. It is a prototype for a coding-assessment and is still in the works.

## Technology Stack

- **Backend**: This is created using Django and the Django REST Framework.
- **Frontend**: This is created using React.

## Project Structure

- The front-end consists of React components with navigation to interact with the API endpoints.
- The back-end handles room creation, listing, and joining.

## Installation and Setup

### Requirements
Ensure you have the following:
- Python 3.x
- Django
- Node.js and npm for frontend

### Running the Project

1. **Navigate to project directory:**

   ```bash
   cd musicK
   ```

2. **Start Django server:**

   Run the following command in your terminal:

   ```bash
   python manage.py runserver
   ```

3. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

4. **Start frontend development server:**

   Run the following command:

   ```bash
   npm run dev
   ```

## API Endpoints

There are three available API endpoints:

1. **Create a Room**: 
   - URL: `/api/room`
   - Method: `POST`

2. **List Rooms**:
   - URL: `/api/rooms`
   - Method: `GET`

3. **Join a Room**:
   - URL: `/api/room/<ROOM_CODE>/join`
   - Method: `POST`

## Known Issues

- **Method Not Allowed Warning**: A "Method Not Allowed" message will appear in the terminal if the user successfully inputs an existing code into Endpoint 3 

    (`/api/room/<ROOM_CODE>/join`). 

    This happens because the frontend attempts to make a GET request to an endpoint designed to handle POST requests. For this project, this is intentional for navigational purposes.
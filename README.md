# BookMyShow Backend

Welcome to the backend development of the BookMyShow website project! In this project, we will create the backend server responsible for handling movie bookings and retrieving booking details.

## Project Overview

The backend server exposes API endpoints for booking movies and retrieving the last booking details. It communicates with the frontend client and interacts with a database server.

### Setup and Running

1. Make sure you have Node.js and npm installed.

2. Clone this repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/saurabh853/BookMyShowBackEnd.git
   cd BookMyShowBackEnd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. The backend server will be running on port 8080 by default.

### API Endpoints

#### Booking a Movie

- **Endpoint:** `https://turquoise-panda-sock.cyclic.cloud/api/booking`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "movie": "[movie-name]",
    "seats": {
      "A1": "[no of A1 seats]",
      "A2": "[no of A2 seats]",
      "...": "...",
      "D2": "[no of D2 seats]"
    },
    "slot": "[time-slot]"
  }
  ```
- **Response:** HTTP 200 on successful booking

#### Retrieving the Last Booking

- **Endpoint:** `https://turquoise-panda-sock.cyclic.cloud/api/booking`
- **Method:** GET
- **Response:**
  ```json
  {
    "movie": "[last-movie-name]",
    "seats": {
      "A1": "[last number of A1 seats]",
      "A2": "[last number of A2 seats]",
      "...": "...",
      "D2": "[last number of D2 seats]"
    },
    "slot": "[last-time-slot]"
  }
  ```
- If there is no previous booking, the response will be: `{"message": "no previous booking found"}`

### Project Structure

- `src/`: Contains the source code for the backend application.

### Important Notes

- The backend server communicates with the frontend server running on port 3000.

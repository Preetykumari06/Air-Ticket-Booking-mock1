# Air-Ticket-Booking-mock1

 Routes: {
            UserRoute: {
                Register: { METHOD: "POST", ENDPOINT: '/api/register', DESCRIPTION: 'This endpoint should allow users to register.  Hash the password on store' },
                Login: { METHOD: "POST", ENDPOINT: '/api/login', DESCRIPTION: 'This endpoint should allow users to login. Return JWT token on successful login.' }
            },

            FlightRouter: {
                Get All Flight: { METHOD: "GET", ENDPOINT: '/api/flights', DESCRIPTION: 'This endpoint should return a list of all available flights.' },
                Get Flight By Id: { METHOD: "GET", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should return the details of a specific flight identified by its ID.' },
                Add New Flight:{ METHOD: "POST", ENDPOINT: '/api/flights', DESCRIPTION: ' This endpoint should allow users to add new flights to the system.' },
                Update Flight Data:{ METHOD: "PUT / PATCH ", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should allow users to update the details of a specific flight identified by its ID.' },
                Delete Flight By Id:{ METHOD: "DELETE", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should allow users to delete a specific flight identified by its ID.' }
            },

            BookingRouter: {
                Add New Booking: {METHOD: "POST", ENDPOINT: '/api/booking', DESCRIPTION: 'This endpoint should allow the user to book flights.'},
                Get All Bookings : {METHOD: "GET", ENDPOINT: '/api/dashboard', DESCRIPTION: 'This point should list all the bookings so far with the user and flight details. (Populate the entire flight and user data, and not just id’s)'},
                Update Booking Data:{ METHOD: "PUT / PATCH ", ENDPOINT: '/api/dashboard/:id', DESCRIPTION: 'This endpoint should allow the user to edit / update a booking.'},
                Delete Booking By Id:{ METHOD: "DELETE", ENDPOINT: '/api/dashboard/:id', DESCRIPTION:'This endpoint should allow the user to delete a booking'}
            }
 }

## Problem Statement:

The task is to create backend for a Air Ticket booking system that allows users to book flights for their desired destinations.

## Instructions:

The system should be built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

- The backend should have the following models
- User Model

```yaml
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}
```

- Flight Model

```yaml
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
```

- Booking Model

```yaml
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}
```

The following API routes should be developed to achieve the required functionality:

- ****Populate all the Object ID’s in the API response.**
- **** Use JWT token based authorisation for all the protected routes, return `401 Unauthorized` as response if not.**

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. Hash the password on store | 201 |
| POST | /api/login | This endpoint should allow users to login. Return JWT token on successful login. | 201 |
| GET | /api/flights | This endpoint should return a list of all available flights. | 200 |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. (Protected Route) | 201 |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. (Protected Route) | 204 |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. (Protected Route) | 202 |
| POST | /api/booking | This endpoint should allow the user to book flights. (Protected Route) | 201 |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. (Populate the entire flight and user data, and not just id’s) (Protected Route) | 200 |
| PUT/PATCH | /api/dashboard/:id | This endpoint should allow the user to edit / update a booking. (Protected Route) | 204 |
| DELETE | /api/dashboard/:id | This endpoint should allow the user to delete a booking (Protected Route) | 202 |
---


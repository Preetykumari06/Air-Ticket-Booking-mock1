const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
});

const FlightModel = mongoose.model('flight', FlightSchema);

module.exports = FlightModel;



// {
//     "airline": "American Air",
//     "flightNo": "AA456",
//     "departure": "Chicago",
//     "arrival": "Miami",
//     "departureTime": "2024-03-16",
//     "arrivalTime": "2024-03-16",
//     "seats": 200,
//     "price": 250
//     }
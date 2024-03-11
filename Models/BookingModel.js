const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'flight' }
});

const BookingModel = mongoose.model('booking', BookingSchema);

module.exports = BookingModel;


// {
//     _id: ObjectId,
//     user : { type: ObjectId, ref: 'User' },
//     flight : { type: ObjectId, ref: 'Flight' }
// }

// {
    
//     "user" : "65eed06801ad5306ab26d864",
//     "flight" : "65eed9b4db1e420a610253e6"
// }
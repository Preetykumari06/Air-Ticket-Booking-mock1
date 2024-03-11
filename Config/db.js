const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://preetysingh46231:preetysingh@cluster0.muxtagj.mongodb.net/Air-Ticket-Booking-mock1?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connection
};
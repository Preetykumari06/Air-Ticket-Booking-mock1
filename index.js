const express = require("express");
const {connection} = require("./Config/db");

const port= 3000;


const app=express();
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Welcome To Air Ticket Booking Backend");
})

app.listen(port, async () => {
    try {
     await connection;
     console.log("Connected to the DB...")
    } catch(error){
     console.log(error)
     console.log('Something went wrong...')
  }
      console.log(`Server running at ${port}`)
  })
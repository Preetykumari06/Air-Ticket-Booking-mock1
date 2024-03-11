const express = require("express");
const {connection} = require("./Config/db");
const UserRouter = require("./Routes/User.router");

const port= process.env.port;


const app=express();
app.use(express.json());


app.use("/api",UserRouter)

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
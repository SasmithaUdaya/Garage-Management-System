const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const appointment = require ('./model/appointment');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Garage")


//create
app.post("/appointmentcreate", async (req,res) => {
    appointment.create({
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        contactNumber: req.body.contactNumber,
        serviceType: req.body.serviceType,
        vehicleModel: req.body.vehicleModel,
        vehicleNumber: req.body.vehicleNumber,
        appointmentDate: req.body.appointmentDate,
        timeSlot: req.body.timeSlot,
        completed: req.body.completed
    }).then(() => {
        res.send("success");
    }
    ).catch((err) => {
        res.send (err);
    });
});


app.listen(3000, () =>{
    console.log("server is running")
})

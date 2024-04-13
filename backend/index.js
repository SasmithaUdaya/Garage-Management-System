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


//Read: in history page
app.get("/appointmenthistory", async (req,res) => {
    appointment.find().then((appointments) => {
        res.json(appointments);
    }).catch((err) => {
        res.send(err);
    });
});

//fetch: to update page
app.get("/appointmentupdate/:id", async (req,res) => {
    appointment.findById(req.params.id).then((appointments) => {
        res.json(appointments);
    }).catch((err) => {
        res.send(err);
    });
});

//update: send updated data to database
app.put("/appointmentupdate/:id", async (req,res) => {
    appointment.findByIdAndUpdate(req.params.id, {
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        contactNumber: req.body.contactNumber,
        serviceType: req.body.serviceType,
        vehicleModel: req.body.vehicleModel,
        vehicleNumber: req.body.vehicleNumber,
        appointmentDate: req.body.appointmentDate,
        timeSlot: req.body.timeSlot
    }).then(() => {
        res.send("success");
    }).catch((err) => {
        res.send(err);
    });
});

//delete: from history page
app.delete("/delete/:id", async (req,res) => {
    appointment.findByIdAndDelete(req.params.id).then(() => {
        res.send("success");
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, () =>{
    console.log("server is running")
})

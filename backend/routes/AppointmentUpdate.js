const express = require('express');
const router = express.Router();
const Appointment = require('../model/appointment');




//fetch: to update page
router.get("/appointmentupdate/:id", async (req,res) => {
    Appointment.findById(req.params.id).then((appointments) => {
        res.json(appointments);
    }).catch((err) => {
        res.send(err);
    });
});

//update: send updated data to database
router.put("/appointmentupdate/:id", async (req,res) => {
    Appointment.findByIdAndUpdate(req.params.id, {
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        contactNumber: req.body.contactNumber,
        customerEmail: req.body.customerEmail,
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

module.exports = router;
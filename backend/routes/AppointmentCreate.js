const express = require('express');
const router = express.Router();
const Appointment = require('../model/appointment');

router.post("/appointmentcreate", async (req, res) => {
    Appointment.create({
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        contactNumber: req.body.contactNumber,
        customerEmail: req.body.customerEmail,
        serviceType: req.body.serviceType,
        vehicleModel: req.body.vehicleModel,
        vehicleNumber: req.body.vehicleNumber,
        appointmentDate: req.body.appointmentDate,
        timeSlot: req.body.timeSlot,
        completed: req.body.completed,
        absent: req.body.absent
    }).then(() => {
        res.send("success");
    }).catch((err) => {
        res.status(400).send(err);
    });
});

module.exports = router;

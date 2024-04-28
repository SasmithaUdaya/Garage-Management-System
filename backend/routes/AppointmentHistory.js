const express = require('express');
const router = express.Router();
const Appointment = require('../model/appointment');

//Read: in history page
router.get("/appointmenthistory", async (req,res) => {
    Appointment.find().then((appointments) => {
        res.json(appointments);
    }).catch((err) => {
        res.send(err);
    });
});

//delete: from history page
router.delete("/delete/:id", async (req,res) => {
    Appointment.findByIdAndDelete(req.params.id).then(() => {
        res.send("success");
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;
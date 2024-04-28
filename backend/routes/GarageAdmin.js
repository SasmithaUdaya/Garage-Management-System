const express = require('express');
const router = express.Router();
const Appointment = require('../model/appointment');

// Garage admin's view: Read in garage admin dashboard
router.get("/garagemanagerdash", async (req, res) => {
    try {
        // Get today's date
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

        // Find appointments for the current day
        const appointments = await Appointment.find({
            appointmentDate: { $gte: startOfDay, $lt: endOfDay }
        }).sort({ appointmentDate: 1 });

        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update: mark appointment as completed
router.put("/complete/:id", async (req,res) => {
    Appointment.findByIdAndUpdate(req.params.id, {
        completed: true
    }).then(() => {
        res.send("success");
    }).catch((err) => {
        res.send(err);
    });
});


router.put("/absent/:id", async (req, res) => {
    const { id } = req.params;
    const { absent } = req.body;
  
    Appointment.findByIdAndUpdate(req.params.id, {
         absent: true
        })
      .then(() => {
        res.send("success");
      })
      .catch((err) => {
        res.send(err);
      });
  });

module.exports = router;
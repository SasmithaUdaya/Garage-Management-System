const express = require('express');
const router = express.Router();
const Appointment = require('../model/appointment');

//sent the count of (true) value to customer profile
router.get('/customerprofile/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
  
    try {
      // Find appointments for the specified customer ID
      const appointments = await Appointment.find({ customerId });
  
      // Count the number of completed appointments for the customer
      const completedAppointmentsCount = appointments.filter(appointment => appointment.completed).length;
  
      res.json({ count: completedAppointmentsCount });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
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


//Garage admin's view
//read in garade admin dashboard
app.get("/garagemanagerdash", async (req, res) => {
    try {
        const appointments = await appointment.find().sort({ appointmentDate: 1 });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update: mark appointment as completed
app.put("/complete/:id", async (req,res) => {
    appointment.findByIdAndUpdate(req.params.id, {
        completed: true
    }).then(() => {
        res.send("success");
    }).catch((err) => {
        res.send(err);
    });
});


//sent the count of (true) value to customer profile
app.get('/customerprofile/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
  
    try {
      // Find appointments for the specified customer ID
      const appointments = await appointment.find({ customerId });
  
      // Count the number of completed appointments for the customer
      const completedAppointmentsCount = appointments.filter(appointment => appointment.completed).length;
  
      res.json({ count: completedAppointmentsCount });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
});

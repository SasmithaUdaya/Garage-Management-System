const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const appointment = require ('./model/appointment');

const appointmentRoute = require('./routes/AppointmentCreate');
const updateRoute = require('./routes/AppointmentUpdate');
const historyRoute = require('./routes/AppointmentHistory');
const appointmentdeleteRoute = require('./routes/AppointmentHistory');
const garageadminRoute = require('./routes/GarageAdmin');
const completedRoute = require('./routes/GarageAdmin');
const absentRoute = require('./routes/GarageAdmin');
const customerprofileRoute = require('./routes/CustomerProfile');


const app = express();


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://chamishka:chamishka@garage-management-syste.hnnrhnd.mongodb.net/garage-management-system?retryWrites=true&w=majority&appName=garage-management-system")


app.use('/appointmentcreate',appointmentRoute );
app.use('/appointmentupdate', updateRoute);
app.use('/appointmenthistory', historyRoute);
app.use('/appointmenthistory', appointmentdeleteRoute);
app.use('/garagemanagerdash', garageadminRoute);
app.use('/garagemanagerdash', completedRoute);
app.use('/garagemanagerdash', absentRoute);
app.use('/customerprofile', customerprofileRoute);



app.listen(3000, () =>{
    console.log("server is running")
});

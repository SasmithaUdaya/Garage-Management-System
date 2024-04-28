
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





app.use(cors())
app.use(express.json())



app.use('/appointmentcreate',appointmentRoute );
app.use('/appointmentupdate', updateRoute);
app.use('/appointmenthistory', historyRoute);
app.use('/appointmenthistory', appointmentdeleteRoute);
app.use('/garagemanagerdash', garageadminRoute);
app.use('/garagemanagerdash', completedRoute);
app.use('/garagemanagerdash', absentRoute);
app.use('/customerprofile', customerprofileRoute);





import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import issueRoutes from './routes/issues.route.js';
import authRoutes from './routes/auth.route.js';
import customerRoutes from './routes/customer.route.js';

import listingRouter from './routes/listing.route.js'

import dailyRoutes from './routes/daily.route.js';
import reactionRoutes from './routes/reaction.route.js'
import shistoryRoutes from './routes/statushistory.route.js'
import emailRouter from './routes/email.route.js';
import apRouter from './routes/ap.route.js';

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {

    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

  

const app = express();



app.use(cookieParser()) ;

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
  }
  );

  app.use('/backend/user', userRoutes);
  app.use('/backend/auth', authRoutes);
  app.use('/backend/customer', customerRoutes);
  app.use('/backend/issues', issueRoutes);

  app.use('/backend/listing', listingRouter);

  app.use('/backend/daily',dailyRoutes);
  app.use('/backend/reaction',reactionRoutes);
  app.use('/backend/statushistory',shistoryRoutes);
  app.use('/backend/email', emailRouter);
  app.use('/backend/ap', apRouter);


  app.use( (err ,req,res ,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
     success: false ,
     statusCode ,
     message,
    })
  }); 
   


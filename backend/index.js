import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import issueRoutes from './routes/issues.route.js';
import authRoutes from './routes/auth.route.js';
import customerRoutes from './routes/customer.route.js';



import feedbackRoute from './routes/SupportRoutes/FeedBackRoute.js'
import faqRoute from './routes/SupportRoutes/FAQRoute.js'




import listingRouter from './routes/listing.route.js'
import dailyRoutes from './routes/daily.route.js';
import reactionRoutes from './routes/reaction.route.js'
import shistoryRoutes from './routes/statushistory.route.js'
import emailRouter from './routes/email.route.js';
import apRouter from './routes/ap.route.js';
import appointmentRouter from './routes/appointment.route.js'


import partRouter from './routes/addparts.route.js'
import paymentRouter from './routes/payment.route.js'
import checkoutRouter from './routes/checkout.route.js'




import attendenceRoutes from './routes/attendance.route.js'
import markempRoutes from './routes/employee.route.js'




import cors from 'cors'

// const partRouter = require('./routes/addparts.route.js');


import accidentRoutees from './routes/accident.route.js' ;
import accidentrequestRoutes from './routes/accidentrequest.route.js';
import attendancetrackRoutees from './routes/attendancetrack.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {

    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});




  

const app = express();

app.use(express.json());

app.use(cors());



app.use(cookieParser()) ;

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
  }
  );

  app.use('/backend/user', userRoutes);
  app.use('/backend/auth', authRoutes);
  app.use('/backend/customer', customerRoutes);

  app.use('/backend/issues', issueRoutes);
  app.use('/backend/attendence', attendenceRoutes);
  app.use('/backend/employee', markempRoutes);

  app.use('/backend/listing', listingRouter);

  app.use('/backend/daily',dailyRoutes);
  app.use('/backend/reaction',reactionRoutes);
  app.use('/backend/statushistory',shistoryRoutes);
  app.use('/backend/email', emailRouter);
  app.use('/backend/ap', apRouter);

  app.use('/backend/appointment', appointmentRouter);


  app.use('/backend/addparts',partRouter);
  app.use('/backend/payment',paymentRouter);
  app.use('/backend/checkout',checkoutRouter);
  
  


  // Ishini's Routes
  app.use('/feedback', feedbackRoute)
  app.use('/faq', faqRoute)



  app.use('/backend/accident', accidentRoutees);

  app.use('/backend/accidentrequest',accidentrequestRoutes);
  app.use('/backend/attendancetrack',attendancetrackRoutees);



  app.use( (err ,req,res ,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
     success: false ,
     statusCode ,
     message,
    })
  }); 
   
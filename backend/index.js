import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import issueRoutes from './routes/issues.route.js';
import authRoutes from './routes/auth.route.js';
import customerRoutes from './routes/customer.route.js';
import dailyRoutes from './routes/daily.route.js';
import reactionRoutes from './routes/reaction.route.js'
import shistoryRoutes from './routes/statushistory.route.js'
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

app.use(cookieParser()) ;

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
  }
  );

  app.use('/backend/user', userRoutes);
  app.use('/backend/auth', authRoutes);
  app.use('/backend/customer', customerRoutes);

  app.use('/backend/issues', issueRoutes);
  app.use('/backend/daily',dailyRoutes);
  app.use('/backend/reaction',reactionRoutes);
  app.use('/backend/statushistory',shistoryRoutes);

  


  app.use( (err ,req,res ,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
     success: false ,
     statusCode ,
     message,
    })
  }); 
   
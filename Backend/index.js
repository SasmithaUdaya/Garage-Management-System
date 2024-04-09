import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
);

app.use('/Backend/auth', authRouter);
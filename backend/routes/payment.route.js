import express from 'express';
import { payment, getAllPayment } from '../controllers/payment.conyroller.js';

const router = express.Router();

router.post('/payment',payment)
router.get('/getAllPayment',getAllPayment)

export default router ; 

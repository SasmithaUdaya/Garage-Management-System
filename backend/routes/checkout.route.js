import express from 'express';
import { checkout, getAllBuyer } from '../controllers/checkout.controller.js';

const router = express.Router();

router.post('/checkout',checkout)
router.get('/getAllBuyer',getAllBuyer);

export default router ; 

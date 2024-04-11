import express from 'express';
import { createStatus } from '../controllers/daily.controller.js';


const router = express.Router();

router.post('/createStatus',createStatus)

export default router ; 
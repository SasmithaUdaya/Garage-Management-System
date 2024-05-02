import express from 'express';
import { addparts } from '../controllers/addparts.controller.js';


const router = express.Router();


router.post('/addparts',addparts)

export default router ; 

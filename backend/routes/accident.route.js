import express from 'express';
import { create, deleteAccident, getAllAccident, oneAccident, updateAccident } from '../controllers/accident.controller.js';

const router = express.Router();


router.post('/create',create);
router.get('/getAllAccident',getAllAccident);
router.get('/oneAccident/:id',oneAccident);
router.put('/updateAccident/:id',updateAccident);
router.delete('/deleteAccident/:id',deleteAccident);



export default router;

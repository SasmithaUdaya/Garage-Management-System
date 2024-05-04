import express from 'express';
import { create, getAllAtt } from '../controllers/attendancetrack.controller.js';

const router = express.Router();

router.post('/create',create);
router.get('/getall',getAllAtt);

export default router;

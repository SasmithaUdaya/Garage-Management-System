import express from 'express';
import { create, getAllRequest } from '../controllers/accidentrequest.controller.js';

const router = express.Router();


router.post('/create',create);
router.get('/getall',getAllRequest);

export default router;
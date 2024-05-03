import express from 'express';
import { allreactionhistory, createReactionshistory } from '../controllers/reactionhistory.controller.js';


const router = express.Router();



router.post('/createReactionshistory',createReactionshistory)
router.get('/allreactionhistory',allreactionhistory)







export default router ;
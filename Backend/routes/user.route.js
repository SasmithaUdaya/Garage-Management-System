import express from 'express';
import { updateUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;
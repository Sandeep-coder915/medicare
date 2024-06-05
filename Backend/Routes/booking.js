import express from 'express'
import { authenticate } from '../auth/verifyToken.js'
import {getCheckOutsession} from '../Controllers/bookingController.js'


const router=express.Router()

router.post('/checkout-session/:doctorId',authenticate,getCheckOutsession)

export default router
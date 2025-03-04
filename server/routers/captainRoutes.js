import express from 'express'
import { captainRegisterControllers } from '../controllers/captainController.js';
import { body } from 'express-validator';

const captainRoutes = express.Router();

captainRoutes.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Invalid Vehicle Type'),

],captainRegisterControllers);






export default captainRoutes;
const home_controller = require('./Controllers/homeController');
const authController = require('./Controllers/authenticationController');

import express from 'express';


const router = express.Router();

const port : number = 3000;

router.get('/About', home_controller.about);

router.post('/Login', authController.Login);


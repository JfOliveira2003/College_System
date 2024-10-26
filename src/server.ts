const authController = require('./Controllers/authenticationController');

import express from 'express';


const router = express.Router();



exports.auth = router.post('/Login', authController.Login);


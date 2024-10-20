const home_controller = require('./Controllers/homeController');
const authController = require('./Controllers/authenticationController');

import express from 'express';


const router = express.Router();



exports.about = router.get('/About', home_controller.about);
exports.test = router.get(/.*test$/, home_controller.test)

exports.auth = router.post('/Login', authController.Login);


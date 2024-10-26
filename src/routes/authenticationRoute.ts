const authController = require('../Controllers/authenticationController');

import express from 'express';


const router = express.Router();



exports.Login = router.post('/Login', authController.Login);
exports.Register = router.post('/Register', authController.Register);
exports.Logout = router.post('/Logout', authController.Logout);
exports.forgetPassword = router.post('/ForgotPassword', authController.forgetPassword);

exports.resetPassword = router.post('/resetPassword', authController.resetPassword);


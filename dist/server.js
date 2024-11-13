"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller = require('./Controllers/homeController');
const authController = require('./Controllers/authenticationController');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const port = 3000;
router.get(/.*test$/, (req, res) => {
    res.send("Hello world!");
});
router.get('/About', home_controller.about);
router.post('/Login', authController.Login);
(0, express_1.default)().listen(port);

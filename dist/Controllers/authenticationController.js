"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let student_credential = (req.body).registration;
    const getData_prisma = yield prisma.student.findFirst({
        where: {
            registration: student_credential
        }
    });
    if (getData_prisma == null)
        res.send({ authentication: false });
    else {
        res.send({ authentication: true });
    }
});

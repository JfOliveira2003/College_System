import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

exports.Login = async (req:any, res:any) => {

    let student_credential : string = (req.body).registration;
    const getData_prisma = await prisma.student.findFirst({
        where:
        {
            registration: student_credential
        }
    })
    if(getData_prisma == null) res.send({authentication: false});
    else{
        res.send({authentication: true});
    }     
}

exports.Logout = async (req:any, res:any) => {
    res.send({authentication : false});
}

exports.forgetPassword = async (req:any, res:any) => {
    const email_ = req.body;
    const getData_prisma = await prisma.student.findFirst({
        where:
        {

        }
    })
}

exports.resetPassword = async (req:any, res:any) => {
    const password_ = req.body;

    const getData_prisma = await prisma.student.update

    if(getData_prisma == null) res.send({reset: false});

    else res.send({reset: true});
}
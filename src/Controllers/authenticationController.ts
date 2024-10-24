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
            email: email_
        }
    });
    if(getData_prisma != null) res.send({success:true});
    else res.send({success: false})
}

exports.resetPassword = async (req:any, res:any) => {
    const resp= JSON.parse(req.body);
    const password_ = resp.password;
    const new_password = resp.new_password;
    const id = resp.id;

    const getData_prisma = await prisma.student.update({

        where: {id: id},
        data: {
            registration: new_password
        }
    })

    if(getData_prisma == null) res.send({reset: false});

    else res.send({reset: true});
}
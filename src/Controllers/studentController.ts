import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


exports.createStudent = async (req:any, res:any) => {
    if(req.body == null){
        res.send({success: false});
    }
    const myData = JSON.parse(req.body);
    const createSuccess = prisma.student.create({
        data:
        {
            registration: myData.registration,
            name_: myData.name,
            identification_number: myData.identification_number,
            age: myData.age,
            course_id: myData.course
        }
    })
}
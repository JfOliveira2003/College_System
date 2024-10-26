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

exports.updateStudent = async (req:any, res:any) => {
    if(req.body ===null) res.send({success: false});

    else{
        const myData = JSON.parse(req.body);
        const id = myData.id;
        const new_name =  myData.name;
        const updateStudent = prisma.student.update({
            where: {id: id},
            data:{
                name_: new_name
            }
        })
    }
}
exports.getStudent = async (req:any, res:any) => {
    if(req.body === null) res.send({success: false});

    else{
        const myData = JSON.parse(req.body);
        const id = myData.id;

        const data = await prisma.student.findFirst({
            where:{
                id: id
            }
        })
        data === null ? res.send({success: false}) : res.json(data);
    }
}

exports.getAllStudents = async(req:any, res:any) => {
    const data = prisma.student.findMany();
}
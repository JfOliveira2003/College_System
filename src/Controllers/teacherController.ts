import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



exports.createTeacher = async (req:any, res:any) => {
    if(req.body == null){
        res.send({success: false});
    }                          
    const myData = JSON.parse(req.body);
    const createSuccess = prisma.teacher.create({                                                                                                               
        data:
        {
            name_: myData.name,
            registration_code: myData.registration_code,
            age: myData.age,
            classmate_id: myData.classmate_id,
            academic_background: myData.academic_background
        }
    })
}

exports.updateTeacher = async (req:any, res:any) => {
    if(req.body ===null) res.send({success: false});

    else{
        const myData = JSON.parse(req.body);
        const id : number = myData.id;
        if(myData.desire === 'name'){
            const new_name:string =  myData.name;
            const updateStudent = prisma.student.update({
                where: {id: id},
                data:{
                    name_: new_name
                }
            });
        }
        if(myData.desire === 'academic'){
            const academic =  myData.academic_background;
            const updateStudent = prisma.teacher.update({
                where: {id: id},
                data:{
                    academic_background: academic
                }
            });
        }
    }
}

exports.deleteTeacher = async(req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});
    else{
        const data = await prisma.teacher.delete({
            where:{id: myData.id}
        })
    }

}

exports.getTeacher = async(req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.teacher.findFirst({
            where: {
                id: myData.id
            }
        })
    }
}
exports.getAllTeachers = async(req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.teacher.findMany();
    }
}
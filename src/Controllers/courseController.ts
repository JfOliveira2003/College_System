import { PrismaClient } from '@prisma/client';
import exp from 'constants';
import { title } from 'process';
const prisma = new PrismaClient();


exports.createCourse = async (req:any, res:any) => {
    if(req.body == null){
        res.send({success: false});
    }
    const myData = JSON.parse(req.body);
    const createSuccess = await prisma.course.create({
        data:
        {
            name_: myData.name,
            type_: myData.type,
            integral: myData.integral,
            work_load: myData.work_load,
            teacher_id: myData.teacher,
        }
    });
}

exports.deleteCourse = async(req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});
    else{
        const data = await prisma.course.delete({
            where:{id: myData.id}
        })
    }
}

exports.updateCourse = async (req:any, res:any) => {
    if(req.body ===null) res.send({success: false});

    else{
        const myData = JSON.parse(req.body);
        const id : number = myData.id;
        if(myData.desire === 'name'){
            const new_name:string =  myData.name;
            const updateCourse = await prisma.course.update({
                where: {id: id},
                data:{
                    name_: new_name
                }
            });
        }
        if(myData.desire === 'work'){
            const work =  myData.work_load;
            const updateStudent = await prisma.course.update({
                where: {id: id},
                data:{
                    work_load: work
                }
            });
        }
    }
}
exports.getAllCourses = async (req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.course.findMany();

        res.send(data);
    }
}

exports.createSubject = async (req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.subject_.create({
            data:{
                title: myData.title,
                work_load: myData.work_load,
                points: myData.points
            }
        })
    }
}

exports.getCourse = async(req:any, res:any) => {
    const myData = req.params.id;
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.course.findUnique({
            where: {
                id: myData.id
            }
        });
        res.send(data);
    }
}

exports.getSubject = async(req:any, res:any) => {
    const myData = req.params.id
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.subject_.findUnique({
            where: {id:myData.id}
        })
        res.send(data);
    }
}

exports.getAllSubjects = async (req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.subject_.findMany();
        res.send(data);
    }
}

exports.deleteSubject = async (req:any, res:any) => {
    const myData = req.params.id;
    if(myData === null) res.send({success : false});

    else{
        const data = await prisma.subject_.delete({
            where:{
                id:myData.id
            }
        });
        res.send(data);
    }
}

exports.updateSubject = async (req:any, res:any) => {
    const myData = JSON.parse(req.body);
    if(myData === null) res.send({success : false});

    else{
        if(myData.desire === 'name'){
            const data = prisma.subject_.update({
                where: {
                    id: myData.id,
                },
                data:{
                    title: myData.name
                }
            });
            res.send(data);
        }
        if(myData.desire === "work_load"){
            const data = prisma.subject_.update({
                where: {
                    id: myData.id,
                },
                data:{
                    work_load: myData.work_load
                }
            });
            res.send(data);
        }
        if(myData.desire === "points"){
            const data = prisma.subject_.update({
                where: {
                    id: myData.id,
                },
                data:{
                    points: myData.points
                }
            });
            res.send(data);
        }
    }
}
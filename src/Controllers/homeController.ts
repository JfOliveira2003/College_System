import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



exports.about = async (req: any, res: any) => {
    const courses = await prisma.course.findMany();
    const resp = JSON.stringify(courses);

    res.send(resp);
};

exports.News =  async(req:any, res:any) => {
    
}
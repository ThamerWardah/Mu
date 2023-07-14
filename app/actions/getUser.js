import prisma from '../Libs/prismadb';

export default async function UserMonth(){
    const userMonth = await prisma.user.findMany({
        
        include:{months:true} ,
        nocache: true,
    });
    if(!userMonth){return []}

    return userMonth; 
}


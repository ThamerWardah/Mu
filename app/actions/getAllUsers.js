import prisma from '../Libs/prismadb';

 export default async function Users(){
    const users = await prisma.user.findMany();

    if(!users){return []}
    
    return users
}


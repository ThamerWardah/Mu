import prisma from '../Libs/prismadb';

 async function TheUsers(){
    const users = await prisma.user.findMany();
    if(!users){return []}
    return users
}


export default async function Users(){
    const allusers = await TheUsers();
    return allusers
}

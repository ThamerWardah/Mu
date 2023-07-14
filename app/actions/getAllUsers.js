import prisma from '../Libs/prismadb';

 export default async function Users(name){
    let one = name 
    console.log(one)
    const users = await prisma.user.findMany();

    if(!users){return []}
    
    return users
}


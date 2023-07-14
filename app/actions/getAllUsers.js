import prisma from '../Libs/prismadb';

 const Users = async () =>{
    const users = await prisma.user.findMany();

    if(!users){return []}
    
    return users
}

export default Users ;
import prisma from '../Libs/prismadb';

const UserMonth =  async(id)=>{
    const userMonth = await prisma.user.findUnique({
        where:{ id },
        include:{months:true}
    });
    if(!userMonth){return []}

    return userMonth;
}

export default UserMonth;
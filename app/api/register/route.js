import { NextResponse } from 'next/server';
import prisma from '../../Libs/prismadb'

export  async function POST(request){
     
    const body = await request.json();
    const {name , email }  = body
    
  
    const user = await prisma.user.create({
        data:{
            name,
            email,
        }
    })

    return NextResponse.json(user)

}
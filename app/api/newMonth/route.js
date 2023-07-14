
import prisma from '../../Libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request){

    const body = await request.json();
    const {month , money ,note, userId} = body;
    

    const aMonth = await prisma.month.create({
        data:{
            month,
            money,
            nots:note,
            userId
        }
    });

    return NextResponse.json(aMonth)
}
import prisma from '../../../Libs/prismadb'
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider  from 'next-auth/providers/credentials';
import NextAuth  from 'next-auth/next';




export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{label:'Name',type:'email',placeholder:'Email'},
                password:{label:'Password',type:'password',placeholder:"Password"},
            },
            async authorize(credentials){

                if(!credentials.email || !credentials.password){
                    throw new Error('credentials are required')}

                    const user = await prisma.user.findUnique({
                        where:{
                            email:credentials.email
                        }
                    });
                    if(!user){throw new Error('No such user found')}
                   
               
                    return user
                        }
        })
    ],
    session:{
        strategy:'jwt'
    },
    debug:process.env.NODE_ENV === 'development',
    secret:"myscredapp"
    
};

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}
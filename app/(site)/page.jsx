import Link from "next/link"
import prisma from '../Libs/prismadb';

export default async function Home() {
     const users = await prisma.user.findMany() || [];
  
  return (
    <div className="p-5 ">
     <div className="flex flex-col gap-y-4 ">
      {users.map((user)=>(
      <div key={user.email} >
        <h1 className="font-bold cursor-pointer w-fit" >{<Link href={`/${user.id}`}>{user.name}</Link>}</h1>
        <span className="text-sm font-semibold text-gray-500  ">{user.email}</span>
      </div>))}
     </div>
    </div>
  )
}

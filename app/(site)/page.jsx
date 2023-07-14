import UsersList from '../components/UserList'
import prisma from '../Libs/prismadb';

export default async function Home() {
  const users = await prisma.user.findMany() || [];
  
  return (
    <div className="p-5 ">
     <UsersList users={users}/>
    </div>
  )
}

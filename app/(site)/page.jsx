import UsersList from '../components/UserList'
import Users from '@/app/actions/getAllUsers'

export default async function Home() {

  const users = await Users() || [] ;
  
  return (
    <div className="p-5 ">
     <UsersList users={users}/>
    </div>
  )
}

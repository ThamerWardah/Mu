import UsersList from '../components/UserList'
import Users from '@/app/actions/getAllUsers'

export default async function Home() {
  const name = 'thamer'
  const users = await Users(name) || [] ;
  
  return (
    <div className="p-5 ">
     <UsersList users={users}/>
    </div>
  )
}

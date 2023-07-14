import UsersList from '../components/UserList'
import UserMonth from '../actions/getUser';
export default async function Home() {
  const listOfUsers = await UserMonth();
  const users = await UserMonth();
  return (
    <div className="p-5 ">
     <UsersList users={users}/>
    </div>
  )
}

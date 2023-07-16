import UsersList from '../../components/UserList'
import UserMonth from '../../actions/getUser';
import TheUsers from '../../actions/getAllUsers'
export default async function Home() {
  const allusers = await TheUsers()
  const users = await UserMonth();
  return (
    <div className="p-5 ">
      <h1>This is the Dash board</h1>
      <div>{JSON.stringify(allusers)}</div>
     <UsersList users={users}/>
    </div>
  )
}
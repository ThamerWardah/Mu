import UsersList from '../components/UserList'
import UserMonth from '../actions/getUser';
import Link from 'next/link';
import TheUsers from '../actions/getAllUsers'
export default async function Home() {
  const allusers = await TheUsers()
  const users = await UserMonth();
  return (
    <div className="p-5 ">
      <div>{JSON.stringify(allusers)}</div>
      <Link href='/home'>Home2</Link>
     <UsersList users={users}/>
    </div>
  )
}

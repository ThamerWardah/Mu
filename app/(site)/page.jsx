import UsersList from '../components/UserList'
import UserMonth from '../actions/getUser';
import Link from 'next/link';
export default async function Home() {
  const users = await UserMonth();
  return (
    <div className="p-5 ">
      <Link href='/home'>Home2</Link>
     <UsersList users={users}/>
    </div>
  )
}

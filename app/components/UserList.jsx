'use client'
import { useRouter } from "next/navigation"
const UsersList = ({users})=>{
    const router = useRouter();
    return(
        <div className="flex flex-col gap-y-4 ">
      {users.map((user)=>(
      <div key={user.email} >
        <h1 onClick={()=>router.push(`/${user.id}`)} className="font-bold cursor-pointer w-fit" >{user.name}</h1>
        <span className="text-sm font-semibold text-gray-500  ">{user.email}</span>
      </div>))}
     </div>
    )
}

export default UsersList
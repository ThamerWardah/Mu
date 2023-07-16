import Mon from '../../components/Month';
import UserMonth from '../../actions/getUser';
import MonthItem from '../../components/monthItem'
import Link from 'next/link';

const singleUser = async ({params})=>{
    const fakeDAta = await UserMonth();
    const user = fakeDAta.filter((item)=>item.id === params.id)
    return(
        <div className='lg:flex w-full'> 
        <div className='sm:w-screen md:w-screen lg:mx-auto lg:w-3/4'>
            <div className='flex justify-between'>
            <div className='flex justify-start gap-x-10 px-10 mt-10 text-1xl font-bold'>
                
                    <h1>{user[0].name}</h1>
                    <h1>{user[0].email}</h1>
             </div>
             <h1 className='font-bold px-4 mt-8 border-2 bg-gray-200 rounded-tl-full shadow-md shadow-violet-600 '><Link href='/dashboard'>Home</Link></h1>
            </div>
                    <MonthItem monthsData={user}/>
                    <Mon id={user[0].id}/>
             </div>
     </div>
    )
}

export default singleUser;
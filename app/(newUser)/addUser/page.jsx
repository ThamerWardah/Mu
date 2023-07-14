'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {toast} from 'react-hot-toast'
import Input from '../../components/Input'
import clsx from 'clsx'




const initialData ={
    name:'',
    email:'',
}
export default function NewUser(){
    const router = useRouter()
    const [data ,setData]=useState(initialData);
    const [isLoading , setIsLoading]=useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        axios.post('/api/register',data).then(()=>{
            toast.success('Done');
            setData(initialData)
            setTimeout(()=>{
                router.refresh()
            },500)
            
        }).finally(()=>setIsLoading(false))
    }

    return(
        <div className="h-full bg-gray-100">
           {!isLoading && <h1 onClick={()=>router.push('/')} className='absolute top-6  right-10 cursor-pointer px-4 py-1 rounded-lg font-bold bg-black text-white '>Exit</h1>}
            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-3/4">

                   <Input type='text' placeholder='Name' disabled={isLoading} value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>

                   <Input type='text' placeholder='User name' disabled={isLoading} value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>

                    <button className={clsx(`border-2 rounded-tr-full mt-4 rounded-bl-full bg-gradient-to-tr from-blue-500 to-green-300 shadow-lg shadow-gray-400 border-none  text-gray-800 font-bold`,isLoading&&'opacity-50')}>Add</button>
                </form>
            </div>
           {isLoading &&  <div className={clsx(isLoading && `absolute top-0 w-full h-full bg-gradient-to-r text-center pt-20 text-2xl font-bold from-green-300 to-rose-300 opacity-20 animate-pulse`)}>Adding The User</div> }
        </div>
    )
}
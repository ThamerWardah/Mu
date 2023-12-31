'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const MonthItem = ({monthsData})=>{
    const router = useRouter();
    const monthData = monthsData[0]
    const handleDelete = async(id)=>{  
    const data = { id }
        axios.post('/api/deleted',data).then((callback)=>{
            if(!callback?.error ){
                toast.success('Deleted');
                router.refresh();
            };
            if(callback?.error){toast.error('Somthing wrong happend')}
        })
    }

    return(
        <div>
               <div className='flex flex-col gap-y-4 mt-20'>
                {monthData.months.map((item)=>(<div key={item.id} className="bg-gray-200  px-6 border-2 border-blue-400 rounded-sm mx-8 font-semibold flex flex-col gap-y-8 text-center">
                    <div  className='flex justify-between '>
                        <div className='flex gap-x-8'>
                            <h1>{item.month}</h1>
                            <h1 className='text-green-500'>{item.money}</h1>
                            <h3 className="text-sm  pt-[2px] ">{JSON.stringify(item.createdAt).slice(1,11)}</h3>
                        </div>
                        <button type="button" onClick={()=>handleDelete(item.id)} className='text-red-500'>Delete</button>
                    </div>
                    <div>{item.nots}</div>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default MonthItem;
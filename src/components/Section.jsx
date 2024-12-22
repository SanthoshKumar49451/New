import React, { useContext } from 'react'
import Context from '../Context/Context'

const Section = () => {
    const {data,time}=useContext(Context);
  return (
    <div className=' p-2 bg-slate flex flex-col w-[100%]'>
        <div className='flex  items-center justify-between  w-[100%]  mt-2 '>
            <div className='p-1 w-full'>
              
            <h3 className='font-semibold'>Repostoties</h3>
            <p>{data.length}Repostories</p>
     
            </div>
            <div className='flex gap-2 w-full mt-2'>
            <span className='font-medium border border-gray-400 px-3 py-1 rounded hover:bg-blue-500 hover:text-white'>Refresh all</span>
            <span className='font-medium border border-gray-400 px-3 py-1 rounded hover:bg-blue-500 hover:text-white'>+Add Repositories</span>
            </div>
            <div>

            </div>
            </div>
            <div className='w-48 flex items-center justify-start mt-2  '>
                <input type="text" name="add" id="" className='w-full border border-black outline-none p-2 rounded hover:border-blue-600' placeholder='search repositories...' />
            </div>
            <div className=' flex flex-col gap-2 p-1 items-start justify-start w-ful mt-2'>
               {
                data.map((item,index)=>(
                    <div className='flex flex-col gap-3' key={index}>
                         <div className='flex gap-3'>
                            <h5>{item.appName}</h5>
                            {item.visibility==='public'?<span className='bg-blue-50 p-1 ronded-full text-blue-400'>Public </span>:<span className='bg-blue-50 p-1 ronded-full text-blue-400'>private</span>}
                    
                    </div>
                    <div className='flex gap-2 p-2 '>
                        <p className='text-sm font-medium'>{item.usedTechnology[0]}</p>
                        <p className='text-sm font-medium'>{item.dataStorage}</p>
                        <p className='text-sm font-medium'>{time}</p>
                       
                      
                        
                    </div>
                    <hr />
                    </div>
                ))
               }
            </div>

    </div>
  )
}

export default Section
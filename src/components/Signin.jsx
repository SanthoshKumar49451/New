import React, { useState } from 'react'

const Signin = () => {
  const[state,setState]=useState('saas')
  return (
<div className='flex flex-col sm:flex-row w-full h-screen gap-5 p-2  justify-evenly items-center'>
    
        <div className='w-80  p-2  border border-black  rounded flex  justify-center items-center'>
           
            <div className='flex  flex-col gap-4 justify-between '>
            <h4 className='font-medium text-xl text-center'>Ai detect &autofix Bad Code</h4>
            <hr />
             <div className='flex justify-evenly gap-2    items-center '>
             <p className='font-medium'>30+
              <br />

                Language suport
              </p>
              <p className='font-medium'>

                10K+
                <br />
                Developers
              </p>
              <p className='font-medium'>
                100k+
                <br />
                Hours Saved
              </p>
             </div>
            </div>

 
        </div>
        <div className='p-2 flex flex-col justify-center     items-center  border rouded '>
          <div className='p-3 '>
            <h3 className='font-semibold text-xl '>Welcome to Codeant Ai</h3>
            <div className='flex p-2 gap-2 justify-between '>
            <p className='bg-white border rounded  px-5 py-2 hover:bg-blue-500  hover:text-white hover:cursor-pointer ' onClick={()=>setState('saas')}>SAAS</p>
            <p className='bg-white border rounded hover:bg-blue-500 p-2 hover:text-white hover:cursor-pointer' onClick={()=>setState('self')}>SELF HOISTED</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-3 '>
              <p className={`${state==='saas'?'w-full border px-5 py-2 text-black   border-black rounded hover:bg-blue-500  hover:text-white hover:cursor-pointer  text-center block':'hidden'}`}> Sign in with GitHub</p>
              <p  className={`${state==='saas'?'w-full border px-5 py-2 text-black  border-black rounded hover:bg-blue-500  hover:text-white hover:cursor-pointer  text-center block':'hidden'}`}> Sign i with Bigbucket</p>
              <p className={`${state==='saas'?'w-full border px-5 py-2  border-black text-black rounded hover:bg-blue-500  hover:text-white hover:cursor-pointer  text-center block':'hidden'}`}> Sign in with AzureDevops</p>
              
              <p   className={`${state==='self'||'saas'?'w-full border border-black px-5 py-2 text-black rounded hover:bg-blue-500  hover:text-white hover:cursor-pointer  text-center block':''}`}> Sign in with GitLab</p>
              <p   className={`${state==='self'?'w-full border px-5 py-2 text-black rounded  border-black hover:bg-blue-500  hover:text-white hover:cursor-pointer  text-center block':'hidden'}`}> Sign in with SSO</p>
            
            </div>
          </div>
        </div>
</div>
  )
}

export default Signin

"use client"
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div>
        <div className='fixed bg-black bg-opacity-70 inset-0 w-full z-40 flex items-center justify-center h-[100vh] overflow-hidden'>
            <div className='p-3 rounded-md'>
                <AiOutlineLoading3Quarters size={100} className='animate-spin text-primary'/> 
                <div className='text-center pt-5 text-xl font-bold text-primary'>Loading..</div>
            </div>
    </div>
    </div>
  )
}

export default Loading
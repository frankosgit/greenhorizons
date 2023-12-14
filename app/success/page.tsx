import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Link from 'next/link'
import { Main } from 'next/document'
import MainLayout from '../layouts/mainlayout'


const Success = () => {
  return (
    <MainLayout>
    <div id="successPage" className='mt-24 max-w-[1200] mx-auto px-2 min-h-[50vh] font-mono'>
        <div className='w-full p-6 min-h-[150px] flex items-center justify-center'>
        <div>
            <div className='flex items-center text-xl'>
                <AiOutlineCheckCircle className='text-green-500' size={35}/>
                <span>Form submit sucessful</span>
            </div>  
            <p className='text-sm mb-8'>Thankyou! We will be in touch regarding your request as soon as possible</p>
            
            <Link href="/"><div className='w-full text-center text-sm font-semibold text-secondary'>Home</div></Link>
            <Link href="/orders"><div className='w-full text-center text-sm font-semibold text-secondary mt-10'>Your quote request</div></Link>

        </div>
        </div>
        
    </div>
    </MainLayout>
  )
}

export default Success
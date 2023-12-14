"use client"

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout = ({children}:MainLayoutProps) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("storage", function(){
            let res = localStorage.getItem('isLoading')
            res === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
    })

  return (
    <div id= "MainLayout" className='min-w-[1050px] max-w-[1440px] mx-auto'>
        {isLoading ? <isLoading/> : <div></div>}
        <Navbar/>
         {children}
        <Footer/>

    </div>
  )
}

export default MainLayout
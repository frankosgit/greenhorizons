"use client"

import React from 'react'
import MainLayout from '../layouts/mainlayout'
import CartItem from '@/components/cartitem'
import Similarproducts from '@/components/similarproducts'
import Link from 'next/link'

const Cart = () => {

    const product = {   
        id: 1,
        title: "Steg Lyft 15.5",
        description: "Stege med lyft 15.5m klarar last på 150kg Designad för att lyfta solcellspaneler",
        url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
        stock: true,
        priceOnQuote: true,
        category: "Lifting Machinery",
        company: "Camac"
    }

  return (
    <MainLayout>
        <div className='max-w-[1200px] mx-auto mb-8 min-h-[300px] font-mono'>
            <div className='text-2xl font-bold my-4'>Shopping Cart</div>
                <div className='relative flex items-baseline justify-between gap-2'>
                    <div className='w-[65%]'>
                    <CartItem
                            key = {product.id}
                            product = {product}
                        /> 
                    </div>
                    <div>
                    <div id="goToCheckout" className='md:w-[33%] absolute top-0 right-0 m-2'>
                        <Link href="/getquote"> <button className="btn btn-primary btn-block">Get a quote</button></Link>
                    </div>
                    <div className='flex items-center'>
                        <div>Items (3)</div>
                    </div>
                    </div>
                </div>
      
            </div>
     
        <Similarproducts/>
    </MainLayout>
  )
}

export default Cart
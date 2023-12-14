"use client"
import React from 'react'
import ProductType from '../types/product'
import { usePathname } from 'next/navigation'

const CheckOutItem = ({product}: ProductType) => {
    const pathname = usePathname()
  return (
    <div className='flex justify-start rounded-lg mb-2 border p-4'>
        <img src={product.url} className='rounded-md w-[150px] h-[150px]' alt="" />
        <div className='overflow-hidden pl-2 pb-20'>
            <div className='font-semibold text-lg'>
                {product.title}
            </div>
            <div className='text-m font-semibold'>
            <span>{product.company}</span>
        </div>
        <div className='text-m font-semibold'>
            <span>{product.category}</span>
        </div>
        <div className='text-lg font-semibold'>
            {product.stock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Out of Stock</div>}
        </div>

        {pathname === '/cart' ? <div className='text-lg font-semibold'> remove </div> : null}
        </div>
    

    </div>
  )
}

export default CheckOutItem
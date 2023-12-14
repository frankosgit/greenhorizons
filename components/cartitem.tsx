import React from 'react'
import ProductType from '../types/product'

const CartItem = ({product}: ProductType) => {
  return (
    <div className='relative flex justify-start my-2 border w-full p-6'>
        <img src={product.url+'/150'} alt="" className='rounded-md w-[150px] h-[150px]'/>
        <div className='overflow-hidden pl-2 w-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items center font-semibold justify-between w-[400px] text-[16px] underline'>
                    {product?.title}
                </div>
                <div className='font-bold text-lg'>
                    {product?.priceOnQuote ? <div className="text-green-500">Price on quote</div> : <div className="text-red-500">Price on quote</div>}
                </div>
            </div>
            <div className='text-sm mt-2'>
                {product?.description.substring(0, 100)} {product?.description.length > 100 ? '...' : ''}
            </div>
            <div className='absolute right-0 bottom-0 p-4 text-sm'>
                <button className='underline text-secondary'>
                    remove
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
import React from 'react'

import Link from 'next/link'
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from '../layouts/mainlayout'
import CartItem from '@/components/cartitem'

const Orders = () => {

const orders = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    country: "Sweden",
    companyOrder: "John Doe AB",
    telephone: "12356789",
    message: "I would like to order 10 of these products",
    orderItems: [
      {
      id: 1,
      title: "Steg Lyft 15.5",
      url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
      category: "Lifting Machinery",
      company: "Camac"
    }
    ]
}
]
  return (
    <MainLayout>
            <div id="OrdersPage" className='mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]'>
              <div className='bg-white w-full p-6 min-h-[150px]'>
                <div className='flex items-center text-xl'>
                  <CiDeliveryTruck className= "text-green-500" size={30}/>
                  <span className="pl-4">Orders</span>
                </div>

                {orders.length < 1 ?
                <div className='flex items-center jusitfy-center'>
                    "you have no order history"
                </div> : null }
                  {orders.map((order) => (
                        <div key={order?.id} className='text-sm pl-[50px]'>
                          <div className='border-b py-1'>
                            <div className='pt-2'>
                             <span className='font-bold mr-2'>Order id:</span>
                             {order.id}
                        </div> 

                        <div className='pt-2'>
                             <span className='font-bold mr-2'>Contact details:</span>
                             {order?.name}, {order?.companyOrder}, {order?.telephone}, {order?.email}
                        </div> 
                        <div className='pt-2'>
                             <span className='font-bold mr-2'>Order message:</span>
                             {order?.message}
                        </div> 
                    </div>
                    <div className='flex items-center gap-4'>
                      {order?.orderItems.map((item) => (
                        <div key={item?.id} className='flex items-center'>
                          <Link href="/" className='py-1 hover:underline text-secondary font-bold'>
                            <img src={item.url} className='rounded' width="120" alt="" />
                            {item.title}
                          </Link>
                    </div>
                    ))}
                  </div>
                </div>
                  ))}   
              </div>
            </div>
    </MainLayout>
  )
}

export default Orders
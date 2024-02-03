/* "use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from '../layouts/mainlayout'
import CartItem from '@/components/cartitem'
import { useUser } from '@/context/usercontext'
import useIsLoading from '../hooks/useIsLoading'
import { toast } from 'react-toastify'
import { User } from '@supabase/supabase-js'
import { Orders } from '@prisma/client'

const Orders = () => {

  const user = useUser()

  const [orders, setOrders] = useState<Orders[]>()


  const getOrders = async () => {
    try {
      if (!user || !user?.id) return
      const response = await fetch("/api/orders")
      const result = await response.json()
      setOrders(result)
      useIsLoading(false)
    } catch (error) {
      toast.error("Error loading orders")
      useIsLoading(false)
    }
  }

  useEffect(() => {
    useIsLoading(true)
    getOrders()
  }, [user])



  return (
    <MainLayout>
      <div id="OrdersPage" className='mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]'>
        <div className='bg-white w-full p-6 min-h-[150px]'>
          <div className='flex items-center text-xl'>
            <CiDeliveryTruck className="text-green-500" size={30} />
            <span className="pl-4">Orders</span>
          </div>

          {orders?.length < 1 ?
            <div className='flex items-center jusitfy-center'>
              "you have no order history"
            </div> : null}
          {orders?.map((order: Orders) => (
            <div key={orders?.id} className='text-sm pl-[50px]'>
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

export default Orders  */
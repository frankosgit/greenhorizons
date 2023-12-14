import React from 'react'

import Link from 'next/link'
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from '../layouts/mainlayout'

const Orders = () => {

const quotereq = {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    country: "Sweden",
    company: "John Doe AB",
    telephone: "12356789",
    message: "I would like to order 10 of these products",
}
  return (
    <MainLayout>
            <div>Orders</div>
    </MainLayout>
  )
}

export default Orders
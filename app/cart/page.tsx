"use client"

import React, { useEffect } from 'react'
import MainLayout from '../layouts/mainlayout'
import CartItem from '@/components/cartitem'
import Similarproducts from '@/components/similarproducts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/cart'
import useIsLoading from '../hooks/useIsLoading'

const Cart = () => {
    const router = useRouter()
    const cart = useCart()

    useEffect(() => {
        useIsLoading(true);
        cart.getCart()
        useIsLoading(false)
    }, [cart])


    const goToQuote = () => {
        if (!cart.getCart().length) {
            alert("Your cart is empty!")
            return
        }
        router.push('/getquote')
    }



    return (
        <MainLayout>
            <div className='max-w-[1200px] mx-auto mb-8 min-h-[300px] font-mono'>
                <div className='text-2xl font-bold my-4'>Shopping Cart</div>
                <div className='relative flex items-baseline justify-between gap-2'>
                    <div className='w-[65%]'>
                        {cart.getCart().map(product => (
                            <CartItem
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                    <div>
                        <div id="goToCheckout" className='md:w-[33%] absolute top-0 right-0 m-2'>
                            <button className="btn btn-primary btn-block" onClick={goToQuote}>Get a quote</button>
                        </div>

                    </div>
                </div>
                <div className='flex items-center mt-20'>
                            <div>Items ({cart.getCart().length})</div>
                        </div>

            </div>

            <Similarproducts />
        </MainLayout>
    )
}

export default Cart
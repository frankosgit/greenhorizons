"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart, ContextProps } from '@/context/cart'
import { toast } from 'react-toastify'
import MainLayout from '@/app/layouts/mainlayout';
import ProductCard from '@/components/productcard';
import useIsLoading from '@/app/hooks/useIsLoading';
import { Products } from '@prisma/client';



const Inverters = () => {
    const cart = useCart() as ContextProps
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        useIsLoading(true)
        const getProducts = async () => {
            try {
                const response = await fetch("/api/products?category=inverter")
                const result = await response.json()
                setProducts(result)
                
            } catch (error) {
                toast.error("Error loading products")
                useIsLoading(false)
            }
        }
        getProducts();
        useIsLoading(false)


    }, [])



    return (
        <MainLayout>
            <div className='px-20'>
                <h1 className='font-mono text-4xl my-20'>Inverters</h1>
                <div className="grid grid-cols-3 gap-5">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}


                </div>
            </div>
        </MainLayout>
    )
}

export default Inverters
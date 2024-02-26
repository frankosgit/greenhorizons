"use client";

import React, { useEffect, useState } from 'react'
import { useCart, ContextProps } from '@/context/cart'
import { toast } from 'react-toastify'
import MainLayout from '@/app/layouts/mainlayout';
import ProductCard from '@/components/productcard';
import UseIsLoading from '@/app/hooks/useIsLoading';
import ProductType from '@/types/product';

const SolarPanels = () => {

    const cart = useCart() as ContextProps
    const [products, setProducts] = useState<ProductType[]>([])
    const category = "solarpanel";
    const apiUrl = `http://localhost:9090/products/get/category/${category}`

    useEffect(() => {
        UseIsLoading(true)
        const getProducts = async () => {
            try {
                const response = await fetch(apiUrl)
                const result = await response.json()
                setProducts(result)

            } catch (error) {
                toast.error("Error loading products")
                UseIsLoading(false)
            }
        }
        getProducts();
        UseIsLoading(false)


    }, [])


    return (
        <MainLayout>
            <div className='px-20'>
                <h1 className='font-mono text-4xl my-20'>Solar panels</h1>
                <div className="grid grid-cols-3 gap-5">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default SolarPanels
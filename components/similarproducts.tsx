import React, { useEffect, useState } from 'react'
import ProductCard from './productcard'
import { BiLoader } from 'react-icons/bi'
import ProductType from '@/types/product'

const Similarproducts = () => {

    const [products, setProducts] = useState<ProductType[]>([])
    const getRandomProducts = async () => {
        try {
            const response = await fetch("/api/products/get-random")
            const result = await response.json()
            setProducts(result)
        } catch (error) {
            console.log("Error loading products")
        }
    }

    useEffect(() => {
        getRandomProducts()
    }
    , [])


  return (
    <div>
        <div className='border-b py-1 max-w-[1200px] mx-auto'/>
        <div className='max-w-[1200px] mx-auto font-mono'>
            <div className='font-bold text-2xl py-2 mt-4'>Similar Products you may be interested in</div>

            {products.length > 0 ? 
            <div className='grid grid-cols-3 gap-4'>
            {products.map((product) => (
                <ProductCard
                key={product._id}
                product={product}
                />
            ))}
        </div> :
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-4 font-semibold'>
                <BiLoader size={30} className="text-primary animate-spin" />
                Loading products...
            </div>
        </div> 
        }
    </div>
    </div>
  )
}

export default Similarproducts
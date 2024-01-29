import React from 'react'
import ProductType from '../types/product'
import Link from 'next/link'
import { ContextProps, useCart } from '@/context/cart'
import { toast } from 'react-toastify'

const ProductCard = ({product} : ProductType) => {
    const cart = useCart() as ContextProps

  return (
    <div className="card w-96 bg-base-100 shadow-xl flex flex-col h-96 mb-20">
            <figure className='bg-white'>
                <img src={product?.url} alt={product.title} className="w-full h-full object-contain"/> 
                
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {product.title}
                </h2>
                <div className="card-actions flex items-center my-2">
                    <div className="badge badge-outline">{product.category}</div> 
                    <div className="badge badge-outline">{product.company}</div>
                    <a target="_blank" href="https://www.camacsa.com/en/01-construction-lifting-machinery.html"><div className="badge badge-outline">Läs mer</div></a>
                    <button
                    onClick = {() => {
                        if(cart.isItemAdded) {
                            cart.removeFromCart(product)
                            toast.success(`${product.title} removed from cart`)
                        } else {
                            cart.addToCart(product)
                            toast.success(`${product.title} added to cart`)
                        }
                    }}
                    
                    className={`btn btn-primary ${cart.isItemAdded ? 'btn-secondary' : 'btn-primary'}`}>{cart.isItemAdded ? `Remove from cart` : `Add to cart`}</button>
                    <Link href = {`/shop/${product.category}/${product.id}`}><button className="btn btn-primary">More Details</button></Link>

                </div>
            </div>
        </div>
  )
}

export default ProductCard
"use client";

import React from 'react'
import Link from 'next/link'
import { useCart, ContextProps } from '@/context/cart'
import { toast } from 'react-toastify'

const Batteries = () => {

    const cart = useCart() as ContextProps

    const product = {   
        id: 1,
        title: "Steg Lyft 15.5",
        description: "Stege med lyft 15.5m klarar last på 150kg Designad för att lyfta solcellspaneler",
        url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
        stock: true,
        priceOnQuote: true,
        category: "Lifting Machinery",
        company: "Camac"
    }

  return (
    <div className='px-20'>
    <h1 className='font-mono text-4xl my-20'>Batteries</h1>

 <div className="grid grid-cols-3 gap-5">

        <div className="card w-96 bg-base-100 shadow-xl flex flex-col h-96 mb-20">
            <figure className='bg-white'>
                <img src={product?.url} alt={product.title} className="w-full h-full object-contain"/> 
                
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {product.title}
                <div className="badge badge-secondary">{product.stock ? "Fast delivery!" : "1-2 weeks delivery"}</div>
                </h2>
                <p>{product.description}</p>
                <div className="card-actions flex items-center my-2">
                    <div className="badge badge-outline">{product.category}</div> 
                    <div className="badge badge-outline">{product.company}</div>
                    <a target="_blank" href="https://www.camacsa.com/en/01-construction-lifting-machinery.html"><div className="badge badge-outline">Läs mer</div></a>
                    <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/solarpanel.jpeg" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Title
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus">
                    <button 
                onClick={() => {
                    if (cart.isItemAdded) {
                        cart.removeFromCart(product)
                        cart.setIsItemAdded(false)
                        toast.info("Item removed from cart")
                    } else {
                        cart.addToCart(product)
                        cart.setIsItemAdded(true)
                        toast.success("Item added to cart")
                    }
                }}
                className={`btn btn-primary
                ${cart.isItemAdded ? "bg-green-500" : "bg-primary"}
                `}

                >{cart.isItemAdded ? "remove from cart" : "add to cart"}</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/battery.png" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Title
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/hardware.jpeg" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/solarpanel.jpeg" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/battery.png" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/hardware.jpeg" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/solarpanel.jpeg" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl h-96 mb-20">
            <figure className='bg-white'><img src="/battery.png" alt="Shoes" className="w-full h-full object-contain"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">IN STOCK</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                <div className="badge badge-outline ml-auto">Hardware</div> 
                <div className="badge badge-outline">Hannersun</div>
                </div>
            </div>
        </div>

    
    </div>  
</div>
  )
}

export default Batteries
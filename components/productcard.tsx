import React from 'react'
import ProductType from '../types/product'
import Link from 'next/link'

const ProductCard = ({product} : ProductType) => {
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
                    <Link href = "/contactus"><button className="btn btn-primary">GET QUOTE</button></Link>
                    <Link href = {`/shop/${product.category}/${product.id}`}><button className="btn btn-primary">More Details</button></Link>

                </div>
            </div>
        </div>
  )
}

export default ProductCard
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart, ContextProps } from '@/context/cart'
import debounce from "debounce"
import { BiLoaderCircle } from 'react-icons/bi';
import ProductType from '@/types/product'

const Navbar = () => {
  const cart = useCart() as ContextProps
  const [items, setItems] = useState<ProductType[] | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [cartCount , setCartCount] = useState<number>(0)


  const handleSearchName = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setItems(null)
      return
    }
    setIsSearching(true)

    try {
      const response = await fetch(`/api/products/search-by-name/${e?.target.value}`)
      const result = await response.json()

      if (result) {
        setItems(result)
        setIsSearching(false)

      }
      setIsSearching(false)

    } catch (err) {
      console.log(err)
      alert('Error searching for products')
    }

  }, 500)


  useEffect(() => {
    if (typeof window !== 'undefined') {
        const count = cart.cartCount()
        if (count) setCartCount(count);
    }
}, []);

  return (

    <div className="navbar bg-base-100 font-mono">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <Link href="/aboutus" className='mb-2'><li>About us</li></Link>
          <Link href="/partners" className='mb-2'><li>Partners</li></Link>
          <Link href="/products" className='mb-2'><li>Our products</li></Link>
        </ul>
      </div>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl bg-accent"><img className="h-10" src="/GrönHLogo.png" alt="" /></Link>
      </div>

      <input onChange={handleSearchName} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs mr-4" />
      <label htmlFor="my_modal_6" className="btn mr-4">       {isSearching ? <BiLoaderCircle className="animate-spin" size={22} /> : "Search"}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box h-[300px] w-[600px]">
          <h3 className="font-bold text-lg">Results</h3>
          {isSearching ? <BiLoaderCircle className="animate-spin" size={22} /> : null}

          {items && items.length > 0 ?

            <div className="p-6 absolute z-50 w-50% left-0 top-12 max-w-[500px] h-auto">{items?.map((item) => <div className='m-2 p-4 flex border align-center hover:bg-gray-200 cursor-pointer' key={item._id}> <Link href={`/shop/${item?.category}/${item?._id}`}>{item.title}  <img className='w-[50px]' src={item.url} alt="" /> </Link></div>)}</div> : "Your search critera returned no results"}
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>


      <Link href="/products" className="btn btn-ghost normal-case text-m text-black mr-4 bg-primary">Store</Link>

      <Link href="/contact" className="btn btn-ghost normal-case text-m text-black mr-4 bg-primary">Contact</Link>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">{cartCount}</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{ cartCount } products in cart</span>
              <span className="text-info">Get price on request</span>
              <div className="card-actions">
                Checkout
                <Link href="/getquote"> <button className="btn btn-primary btn-block">Get quote</button></Link>
                <Link href="/cart"> <button className="btn btn-primary btn-block">Cart</button></Link>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
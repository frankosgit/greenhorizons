"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useCart, ContextProps } from '@/context/cart'
import { useUser } from "@/context/usercontext";

const Navbar = () => {
  const cart = useCart() as ContextProps
  const user = useUser()

  const isLoggedIn = () => {
    console.log(user)
    if (user && user?.id) {
      return (
        <button
        className='flex items-center gap-2 hover:underline cursor-pointer'
        >
        <div>Hi, {user.name}</div>
        <img src="" alt="" />
        </button>
      )
    }
  }

  const isLoggedInProfileImg = () => {
    console.log(user)
    console.log(cart)
    if (user && user?.id) {
      return (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="pt-btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mt-4 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>        </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>{user.name}</li>
          <li>
            <Link href="/auth" className="justify-between">
              Profile
              <span className="badge"></span>
            </Link>
            <Link href="/" className="justify-between">
              {isLoggedInMenuButton()}
              <span className="badge"></span>
            </Link>
          </li>
        </ul>
      </div>
      )
    } else {
      return (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="pt-btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mt-4 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>        </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>Log in to access profile!</li>
          <li>
          
            {isLoggedInMenuButton()}

          </li>
        </ul>
      </div>
      )
    }
  }


  const handleSignOut = () => {
    if (user && user?.id) {
      user.signOut()
    }
  }

  const isLoggedInButton = () => {
    if (user && user?.id) {
      return (
        
        <Link href ="/" 
        className="btn btn-ghost normal-case text-m bg-accent text-black mr-4 bg-primary"
        onClick={handleSignOut}>
        Log out</Link>
      )
  } else {
    return (
      <Link href ="/login" className="btn btn-ghost normal-case text-m bg-accent text-black mr-4 bg-primary">Log in</Link>
    )
  }
}

const isLoggedInMenuButton = () => {
  if (user && user?.id) {
    return (
      <Link href="/auth" className="justify-between" onClick={handleSignOut}>
      Log out
    </Link>
    )
} else {
  return (
    <Link href="/login" className="justify-between">
    Log in
    <span className="badge"></span>
  </Link>  )
}
}

  let cartCount = cart.cartCount()

  return (

        <div className="navbar bg-base-100 font-mono">
        <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <Link href = "/aboutus" className='mb-2'><li>About us</li></Link>
                <Link href = "/partners" className='mb-2'><li>Partners</li></Link>
                <Link href = "/shop" className='mb-2'><li>Our products</li></Link>
              </ul>
            </div>
          <div className="flex-1">
            <Link href ="/" className="btn btn-ghost normal-case text-xl bg-accent"><img className="h-10" src="/GrönHLogo.png" alt="" /></Link>
          </div>
          <div className='mr-40'>
          {isLoggedIn()}
          </div>
          <Link href ="/shop" className="btn btn-ghost normal-case text-m bg-accent text-black mr-4 bg-primary">Store</Link>
          {isLoggedInButton()}
            <Link href ="/contact" className="btn btn-ghost normal-case text-m bg-accent text-black mr-4 bg-primary">Contact</Link>
        
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
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Get price on request</span>
                  <div className="card-actions">
                  <Link href="/getquote">Checkout
                    <button className="btn btn-primary btn-block">Get a quote</button></Link>
                  </div>
                </div>
              </div>

            </div>
            {isLoggedInProfileImg()}
          </div>
        </div>
  )
}

export default Navbar
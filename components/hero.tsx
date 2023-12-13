"use client"

import React, { use } from 'react'
import Link from 'next/link'
import { useUser } from "@/context/usercontext"


const Hero = () => {

  const user = useUser()

  const handleSignOut = () => {
    if (user && user?.id) {
      user.signOut()
    }
  }

  const isLoggedInButton = () => {
    if (user && user?.id) {
      return (
        <Link href ="/getquote" 
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


  return (
        <>
        <div className="hero min-h-screen font-mono bg-warning">
        <div className="hero-content text-center">
        <div className="max-w-md">
            <h1 className="text-8xl font-bold font-mono">Grön Horisont</h1>
            <p className="py-6">Ditt förstahandsval för hållbar solenergi!</p>
            <div className="flex mx-auto justify-center"> 
            <div className="flex-column">
            {isLoggedInButton()}
            </div>
            <Link href="/shop"><button className="btn btn-primary ml-6">Our products</button></Link>
            </div>
        </div>

        </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default Hero
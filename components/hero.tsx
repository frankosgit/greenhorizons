import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
        <>
        <div className="hero min-h-screen bg-base-200 font-mono">
        <div className="hero-content text-center">
        <div className="max-w-md">
            <h1 className="text-8xl font-bold font-mono">Green Horizons</h1>
            <p className="py-6">Powering tomorrow, Today</p>
            <div className="flex mx-auto justify-center"> 
            <div className="flex-column">
            <Link href="/auth"><button className="btn btn-primary">Log in</button></Link>
            <Link href="/register"><p className="btn-ghost normal-case text-center text-xs mt-1">register</p></Link>
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
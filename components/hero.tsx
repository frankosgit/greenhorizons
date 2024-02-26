"use client"
import Link from 'next/link'


const Hero = () => {


  return (
    <>
      <div className="hero min-h-screen font-mono bg-warning">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold font-mono">Grön Horisont</h1>
            <p className="py-6">Ditt förstahandsval för hållbar solenergi!</p>
            <div className="flex mx-auto justify-center">
              <div className="flex-column">
              </div>
              <Link href="/products"><button className="btn btn-primary ml-6">Our products</button></Link>
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
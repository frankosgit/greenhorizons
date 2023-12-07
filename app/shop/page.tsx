'use client';

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StoreCardComponent } from '@/components/storecardcomponent';

const Shop = () => {
    const scrollToElement = (id: any) => {
        if (typeof window !== 'undefined') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } }
      };
  return (
      <>
          <div className="hero min-h-screen bg-alert font-mono">
              <div className="hero-content text-center">
                  <div className="max-w-l pb-40">
                      <h1 className="text-8xl font-bold font-mono mt-40">Our store</h1>
                      <p className="py-6 mb-20">High quality products from our hand-picked partners, <br /> for a great price</p>
                      <Link href = "#productHeader" 
                      onClick={() => scrollToElement("productHeader")}
                      className="btn btn-ghost normal-case text-m bg-accent text-black mr-4 bg-primary">Explore Our Collection
                      </Link>
                      <Link href="/partners"><button className="btn btn-primary ml-20">Our partners</button></Link>


       {/*        
                  <Carousel>
                      <CarouselItem width="100%"> 
                          <Slide number={1} />
                      </CarouselItem>
                      <CarouselItem width="100%"> 
                          <Slide number={2} />
                      </CarouselItem>
                      <CarouselItem width="100%">
                          <Slide number={3} />
                      </CarouselItem>
                      <CarouselItem width="100%">
                          <Slide number={4} />
                      </CarouselItem>
                      <CarouselItem width="100%">
                          <Slide number={5} />
                      </CarouselItem>
                  </Carousel> */}
                 


                  {/*         <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                              <a href='#about'>
                              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center p-2'>
                                  <motion.div
                                  animate={{
                                      y: [0, 24, 0],
                                  }}
                                  transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatType: "loop",
                                  }}
                                  className='w-3 h-3 rounded-full bg-black mb-1'
                                  />
                              </div>
                              </a>
                          </div> */}
                      <h2 id="productHeader" className="text-6xl font-bold font-mono mt-20 mb-20">Products</h2>


                      <StoreCardComponent/>  

                      <Link href ="/contact"><button className="btn btn-primary my-12">Missing something? Contact us.</button></Link>


                  </div>
              </div>
          </div>
      
      </>
  )
}

export default Shop
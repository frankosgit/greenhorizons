import React from 'react'
import ProductCard from './productcard'
import { BiLoader } from 'react-icons/bi'

const Similarproducts = () => {

    const products = [
        {   
            id: 1,
            title: "Steg Lyft 15.5",
            description: "Stege med lyft 15.5m klarar last på 150kg Designad för att lyfta solcellspaneler",
            url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
            stock: true,
            priceOnQuote: true,
            category: "Lifting",
            company: "Camac"
        },
        {   
            id: 2,
            title: "Unik Steglyft",
            description: "Specialdesignad för solcellspaneler klarar last på 100kg kan fästas på ett flertal stegar Kräver ingen el, dras med hjälp av skruvdragare klarar höjder upp till 12.5m",
            url: "https://gronhorisont.se/____impro/1/onewebmedia/Minor%20Ladder_hoist_Driver%20100.jpg?etag=%222fd83-651567f1%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B172&extract=0%2B6%2B137%2B148&quality=85",
            stock: true,
            priceOnQuote: true,
            category: "Lifting",
            company: "Camac"
        },
        {   
            id: 3,
            title: "Hitouch 5 HN18-54H 395-415W",
            description: "MONO PERC Modul med hög effektivitet 21.25% Maximal effektivitet 12 ÅR Produktgaranti",
            url: "https://gronhorisont.se/____impro/1/onewebmedia/Handersun/5/HN18-54H.jpg?etag=%221c3509-650854e7%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B194&extract=0%2B12%2B137%2B148&quality=85",
            stock: true,
            priceOnQuote: true,
            category: "solarPanel",
            company: "Camac"
        },
        {   
            id: 3,
            title: "Hitouch 5 HN18-54H 395-415W",
            description: "MONO PERC Modul med hög effektivitet 21.25% Maximal effektivitet 12 ÅR Produktgaranti",
            url: "https://gronhorisont.se/____impro/1/onewebmedia/Handersun/5/HN18-54H.jpg?etag=%221c3509-650854e7%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B194&extract=0%2B12%2B137%2B148&quality=85",
            stock: true,
            priceOnQuote: true,
            category: "solarPanel",
            company: "Camac"
        },
    
    
    
    ]
  return (
    <div>
        <div className='border-b py-1 max-w-[1200px] mx-auto'/>
        <div className='max-w-[1200px] mx-auto font-mono'>
            <div className='font-bold text-2xl py-2 mt-4'>Similar Products you may be interested in</div>

            {products.length > 0 ? 
            <div className='grid grid-cols-3 gap-4'>
            {products.map((product) => (
                <ProductCard
                key={product.id}
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
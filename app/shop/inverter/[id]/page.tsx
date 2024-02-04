"use client";
import MainLayout from "@/app/layouts/mainlayout";
import SimilarProducts from "@/components/similarproducts";
import React from 'react'

const LiftingProduct = () => {
    const product = {
            id: 2,
            title: "Unik Steglyft",
            description: "Specialdesignad för solcellspaneler klarar last på 100kg kan fästas på ett flertal stegar Kräver ingen el, dras med hjälp av skruvdragare klarar höjder upp till 12.5m",
            url: "https://www.camacsa.com/ImgCli/Ladder-Hoist-Driver-100.jpg",
            stock: true,
            priceOnQuote: true,
            category: "Lifting",
            company: "Camac"
    }


  return (
    <MainLayout>
    <div className = "max-w-[1200px] mx-auto">
        <div className = "flex px-4 py-10">
            {product?.url 
            ? <img className="w-[40%] rounded-lg" src={product.url}/>
            : <div className="w-[40%]"> </div>}

            <div className="px-5 w-full">
                <div className="font-bold text-xl">{product?.title}</div>
                <div className="text-sm pt-2 text-gray-700">Only from the best manufacturers. Full-warranty</div>
                <div className="border-b py-1"/>
                <div className="pt-3 pb-2">
                    <div className="flex items-center">
                    In Stock: {product?.stock ? <div className="text-green-500">Yes</div> : <div className="text-red-500">No</div>}
                    </div>
              </div>
              <div className="border-b py-1"/>
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        {product.priceOnQuote ? <div className="text-green-500">Price on quote</div> : <div className="text-red-500">Price on quote</div>}
                    </div>
                    <button className="btn btn-primary">GET QUOTE</button>
                </div>
                
            </div>

            <div className="border-b py-1"/>

            <div className="pt-3">
            <div className="font-semibold pb-1">Description: </div>
            <div className="text-sm">{product?.description}</div>
        </div> 

            <div className="border-b py-1"/>
            </div>
            
        </div>
        
        </div>
        <SimilarProducts/>
        </MainLayout>
            )
        }
        

export default LiftingProduct
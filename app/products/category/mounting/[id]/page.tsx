"use client";
import MainLayout from "@/app/layouts/mainlayout";
import SimilarProducts from "@/components/similarproducts";
import ProductType from "@/types/product";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react'

const LiftingProduct = () => {
    const params = useParams()
    const { id } = params
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        console.log(id, "are the params")
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:9090/products/category/mounting/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <MainLayout>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">
                    {product?.url
                        ? <img className="w-[40%] rounded-lg" src={product.url} />
                        : <div className="w-[40%]"> </div>}

                    <div className="px-5 w-full">
                        <div className="font-bold text-xl">{product?.title}</div>
                        <div className="text-sm pt-2 text-gray-700">Only from the best manufacturers. Full-warranty</div>
                        <div className="border-b py-1" />
                        <div className="pt-3 pb-2">
                            <div className="flex items-center">
                                In Stock: {product?.stock ? <div className="text-green-500">Yes</div> : <div className="text-red-500">No</div>}
                            </div>
                        </div>
                        <div className="border-b py-1" />
                        <div className="pt-3">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center">
                                    {product.priceOnQuote ? <div className="text-green-500">Price on quote</div> : <div className="text-red-500">Price on quote</div>}
                                </div>
                                <button className="btn btn-primary">GET QUOTE</button>
                            </div>

                        </div>

                        <div className="border-b py-1" />

                        <div className="pt-3">
                            <div className="font-semibold pb-1">Description: </div>
                            <div className="text-sm">{product?.description}</div>
                        </div>

                        <div className="border-b py-1" />
                    </div>

                </div>

            </div>
            <SimilarProducts />
        </MainLayout>
    )
}


export default LiftingProduct
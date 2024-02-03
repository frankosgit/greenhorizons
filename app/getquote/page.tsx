import React from 'react'
import MainLayout from '../layouts/mainlayout'
import CheckOutItem from '@/components/CheckoutItem'

const GetQuote = () => {

    const product = {
        id: 1,
        title: "Steg Lyft 15.5",
        description: "Stege med lyft 15.5m klarar last på 150kg Designad för att lyfta solcellspaneler",
        url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
        stock: true,
        priceOnQuote: true,
        category: "Lifting Machinery",
        company: "Camac"
    }

    return (
        <MainLayout>

            <div className="font-mono flex">
                <div className='w-1/2 p-4'>
                    <section className="text-gray-700 body-font relative">
                        <div className="container py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                    Get a quote
                                </h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-12">
                                    Add items to your basket. <br />
                                    Submit this form <br />
                                    And we'll email you within a few working days!
                                </p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                        <div className="relative">
                                            <label
                                                htmlFor="Country"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Country
                                            </label>
                                            <input
                                                type="Country"
                                                id="Country"
                                                name="Country"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label
                                                htmlFor="email"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label
                                                htmlFor="telephone"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Telephone Number
                                            </label>
                                            <input
                                                type="telephone"
                                                id="telephone"
                                                name="telephone"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label
                                                htmlFor="message"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Message (included estimate of quantities)
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                            <button formAction="submit" className="mt-6 btn btn-ghost normal-case text-m bg-accent text-white">Submit</button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <div className='w-1/2 p-4'>
                    <h1 className='mb-8'>Items for quote:</h1>
                    <CheckOutItem
                        key={product.id}
                        product={product}
                    />
                </div>
            </div>

        </MainLayout>
    )
}

export default GetQuote
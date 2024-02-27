'use client'

import React, { useState } from 'react'
import MainLayout from '../layouts/mainlayout'
import { ContactFormInput } from '../models/contact'
import axios from 'axios'

const Contact = () => {
    const [contactForm, setContactForm] = useState(new ContactFormInput("", "", ""))



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(contactForm.message)
        const submitData = async () => {
            try {
                axios.post('http://localhost:9090/contact/create', contactForm)
                console.log('Contact form submitted')
            } catch (error) {
                console.error('Error submitting contact form:', error);
            }
        }
        submitData()
    }


        return (
            <MainLayout>
                <div className="font-mono">
                    <section className="text-gray-700 body-font relative">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                    Contact Us
                                </h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-12">
                                        We&apos;re here to help. <br />
                                        We look forward to hearing from you 🙂
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
                                                onChange={(e) => handleChange(e)}
                                                type="text"
                                                id="name"
                                                name="name"
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
                                                onChange={(e) => handleChange(e)}
                                                type="email"
                                                id="email"
                                                name="email"
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
                                                Message
                                            </label>
                                            <textarea
                                                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                            <button onClick={(e) => handleSubmit(e)} className="mt-6 btn btn-ghost normal-case text-m bg-accent text-white">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </MainLayout>
        )
    }

    export default Contact
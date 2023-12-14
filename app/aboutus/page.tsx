
import React from 'react'
import Link from 'next/link'
import MainLayout from '../layouts/mainlayout'

interface RadioInputProps {
    type: "radio"
    name: string
    checked: boolean
}

const Aboutus: React.FC<RadioInputProps> =  ( {type, name, checked}) => {
  return (
    <MainLayout>
    <div className="w-100 font-mono pb-40">

    <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/solarpanelhero.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <div className="mr-20">
                <h1 className="text-5xl font-bold mb-20">About Us</h1>
                <h4 className="text-2xl  mb-20">Green horizons: Expertise and innovation <br /> within the solar industry</h4>
            </div>
            <Link href="/contact"><button className="btn btn-primary">Contact</button></Link>
            <Link href="/partners"><button className="btn btn-primary ml-20">Partners</button></Link>
            </div>
            
        </div>
    </div>
    <div className="flex justify-center mb-20">
        <h1 className="text-4xl mr-10 font">Our values:</h1>
        <div className="flex justify-center items-center mt-2">         
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
            <p className="mr-6">Service</p>
            
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/></svg>
            <p className="mr-6">Solutions</p>
            
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            <p className="mr-6">Support</p>
        </div>
    </div>



        <div className="mx-32">
            <div className="collapse bg-base-200 my-3">
                <input type="radio" name="my-accordion-1" checked= {checked} /> 
                <div className="collapse-title text-xl font-medium">
                    Who we are
                </div>
                <div className="collapse-content"> 
                    <p>
                    Green Horizon is your unique wholesale partner specialized in solar cell technology.
                    Our vision is to deliver innovative quality products directly to the end customer and revolutionize the solar energy industry in the Nordic region.
                    With over 15 years of experience in assembling all types of solar energy systems, the company possesses unparalleled knowledge of market dynamics and needs.
                    By constantly striving for innovation, we see a growing need to streamline today's solar energy model, and our mission is to lead this change by selling innovative solutions for various projects.
                    Today, we are not comprehensive, but Green Horizon is moving forward to be a leader in development and deliver what the market demands for various solar energy system systems and solutions.
                    However, the products we sell are all of the highest quality and contribute to higher margins for all our customers. All our products are chosen by experienced installers to try to find faster, safer, and better alternatives.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    Why choose us?
                </div>
                <div className="collapse-content"> 
                    <p>
                    Green Horizon stands not only for quality but also for sustainability and efficiency.
                    We are constantly seeking more efficient, better, and sustainable solutions.
                    Those of us working at Green Horizon have thousands of successful installations behind us, and we have created tailored solutions that suit different types of roofs, making each project unique and efficient.
                    It's not just about offering solar cell technology. For us, each project is a step towards a greener future. By collaborating with recognized brands and manufacturers, we ensure that each installation contributes to a sustainable future.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    Our Partners
                </div>
                <div className="collapse-content"> 
                    <p>
                    In our previous roles, we have all worked with long-lasting customer relationships and collaborative partners.
                    In the present, we are looking for those of you who want to work according to our unique model. This is for those who see and understand the benefits of this approach. We want to help you increase the margins on your projects by offering you unique products and personalized support.
                    Our longstanding collaboration with Telge Energi, which began back in 2016, has not only strengthened our commitment to solar energy in Sweden but also demonstrated our ability to innovate. That's why we started Green Horizon!
                    The partnership has deepened our ties within the industry, and together with Telge Energi and everyone else, we are determined to continue developing and leading the way for the future of solar energy. &nbsp; 
                    <Link href = "partners" className="text-accent underline">Read more</Link>
                    </p>
                </div>
            </div>
        </div>
        
    
</div>
</MainLayout>

  )
}

export default Aboutus
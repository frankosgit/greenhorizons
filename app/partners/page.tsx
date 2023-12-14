import React from 'react'
import Link from 'next/link'
import MainLayout from '../layouts/mainlayout'

interface RadioInputProps {
  type: "radio"
  name: string
  checked: boolean
}

const Partners: React.FC<RadioInputProps> = ({checked}) => {
  return (
    <MainLayout>
    <div className="hero min-h-screen bg-base-100 font-mono">
        <div className="hero-content lg:flex-row">
        <img src="/partners.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <div className="ml-20">
            <h1 className="text-5xl font-bold mb-20">Our partners</h1>
            <h4 className="text-2xl  mb-20">We have established connections with industry leaders within solar to deliver quality equipment at the best prices</h4>
        </div>
        <Link href = "/contact"><button className="btn btn-primary ml-20">Contact</button></Link>
        <Link href = "/shop"><button className="btn btn-primary ml-20">Our Products</button></Link>
        </div>
        
        </div>
    </div>


    <div className="mx-32 font-mono mb-20">
            <div className="collapse bg-base-200 my-3">
                <input type="radio" name="my-accordion-1" checked= {checked} /> 
                <div className="collapse-title text-xl font-medium flex items-center text-bold">
                    <img src="/sollogo1.png" className="w-80" alt="" />
                    <h1 className="justify-center ml-auto">Solar panels</h1>
                </div>
                <div className="collapse-content mx-8"> 
                    <h1 className="text-2xl italic">Hanersun: BNEF Tier 1 Sun Energy Pioneer</h1>
                    <p className="my-4">
                    Hanersun is a globally recognized manufacturer of solar panels offering energy solutions.
                    Since the end of 2022, Hanersun has delivered over 11 GW of solar panels to thousands of customers in more than 50 countries.
                    Hanersun has a strong focus on solar energy and aims to become a global leader in sustainable and environmentally friendly energy production.
                    They strive to provide affordable and competitive solar energy products in the market.
                    Hanersun aims to improve the quality of life for its customers, employees, and the environment.
                    They have developed and built solar projects with a capacity of 600 MW in Asia and the Pacific region.
                    Hanersun has offices around the world and offers excellent service to its local customers.
                    They are ranked as a BNEF Tier 1 solar panel manufacturer, one of PVBL's Top 100 Global PV companies, and the fastest-growing PV company in the industry.
                    </p>
                    <span className="font-bold font-style: italic font-italics"><Link href="https://www.hanersun.com" target="_blank">Read more here</Link></span>

                </div>
            </div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium flex items-center text-bold">
                    <img src="/sollogo2.png" className="max-h-20" alt="" />
                    <h1 className="justify-center ml-auto">Racking solutions</h1>
                </div>
                <div className="collapse-content mx-8"> 
                    <h1 className="text-2xl italic">SUNMODO - Where Innovation Is Part Of The Culture</h1>
                    <p className="my-4">
                    SunModo is an American company based in Vancouver.
                    They have sold over 4 million NanoMount brackets across the United States.
                    Vancouver has worse weather than Sweden! They are accustomed to wet, cold autumns and winters. They have also developed their products based on these conditions!
                    SUNMODO is an innovatively driven company that is attentive to its customers. Hence, they develop products that create added value for you installers.
                    We have been impressed by two different brackets that solve many problems for you installers.
                    Nano Mount!
                    A bracket for asphalt roofs with rough boarding.
                    MRB!
                    A bracket for metal roofs.
                    Nano Mount has revolutionized asphalt roof installations.
                    No hot work.
                    Incredibly fast installation.
                    Flexible mounting for both horizontal and vertical panels.
                    Flexible and easy installation of profiles.
                    Easy to adjust in height to get everything level.
                    Smooth solution for cable management.
                    MRB is a smooth and secure metal roof bracket that fits all types except for seamed metal.
                    Incredibly fast installation.
                    Flexible mounting for both horizontal and vertical panels.
                    Flexible and easy installation of profiles.
                    Easy to adjust in height to get everything level.
                    Smooth solution for cable management.
                    Very secure fastening for both snow and wind loads.
                    With these solutions, you installers will gain a larger margin on every project. Plus, you will be able to install more projects.
                    Higher net profit!
                    In 2024, a bracket for tile roofs will also be introduced that will surprise the market.
                    </p>
                    <span className="font-bold font-style: italic font-italics"><Link href="https://sunmodo.com" target="_blank">Read more here</Link></span>

                </div>
            </div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium flex items-center text-bold">
                    <img src="/sollogo3.png" className="max-h-20" alt="" />
                    <h1 className="justify-center ml-auto">Racking solutions</h1>
                </div>
                <div className="collapse-content mx-8"> 
                    <h1 className="text-2xl italic">The Leading Manufacturer Of Substructures For Photovoltaic Systems.</h1>
                    <p className="my-4">
                    Voestalpine AG is a global, publicly traded steel company headquartered in Linz, Austria, with approximately 46,500 employees.
                    iFix is a newly developed product that improves ballast installations for flat roofs in every way.
                    Currently, only the east-west solution is available.
                    The south solution will be launched in Q1 2024 and is equally as good.
                    Advantages!
                    Fastest, easiest, and safest installation on the market.
                    Low environmental footprint.
                    Simple logistics.
                    Wide contact surface.
                    Low ballast.
                    All these advantages will improve your margins.
                    It is very difficult to go wrong with this system.
                    As an example, the substructure for 500 kW was set up by 5 people in 4 days, including cable installation!
                    For this, only 7 EU pallets of materials needed to be lifted.
                    For those of you who are installers and are responsible for the end result, this is the best system on the market in our opinion.
                    Plenty of space for ballast stones that won't slide or fall off.
                    Click system, so very little screwing.
                    Different types of anti-slip protection under the wide iFix module. The system stays in place!
                    Short delivery times.
                    Quick installation.
                    More money left over!
                    </p>
                    <span className="font-bold font-style: italic font-italics"><Link href="https://www.voestalpine.com" target="_blank">Read more here</Link></span>

                </div>
            </div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium flex items-center text-bold">
                    <img src="/sollogo4.png" className="max-h-20" alt="" />
                    <h1 className="justify-center ml-auto">Lifting machinery</h1>
                </div>
                <div className="collapse-content mx-8"> 
                <h1 className="text-2xl italic"> All products are produced according to European Union regulations, under ISO 9001 quality system. Therefore the correct phases of elaboration of the products are guaranteed.</h1>

                    <p className="my-4">
                    As a modern and progressive company, CAMAC-MINOR HOISTS is aware of the importance of offering good advice through its distributors and after-sales services, keeping oriented to the proper training of its collaborators.

CAMAC-MINOR HOISTS permanently earmarks an important part of its profits for the research, development and innovation of new processes and products, with the aim of designing efficient machines, oriented to the current different construction systems.

CAMAC-MINOR HOISTS has an enthusiastic managing team, with a strong background and large business experience. The whole technical and productive team has been extensively trained in his abilities. All this allows to giving flexible solutions to the challenges of an exigent market in continuous development.
                    </p>
                    <span className="font-bold font-style: italic font-italics"><Link href="https://www.camacsa.com" target="_blank">Read more here</Link></span>

                </div>
            </div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium flex items-center text-bold">
                    <img src="/sollogo5.png" className=" max-h-20" alt="" />
                    <h1 className="justify-center ml-auto">Energy storage solutions</h1>
                </div>
                <div className="collapse-content mx-8"> 
                <h1 className="text-2xl italic">Fox ESS is a global leader in the development of inverter and energy storage solutions.</h1>
                    <p className="my-4 mx-4">
                    Engineered by some of the world’s leading inverter and battery experts, our products are breaking new ground; offering customers the most advanced product features currently available, coupled with unrivalled performance and reliability.
                    <br />RESEARCH
& DEVELOPMENT
At the heart of our operation is our advanced R&D centre in Wuxi, where hundreds of engineers and technicians work tirelessly to perfect our products and ensure that we stay at the forefront of solar inverter and energy storage product development. The team consists of some of the foremost experts in the fields of solar inverter and energy storage technology and together are working on a suite of the most advanced and feature rich products available.
                    </p>
                    <span className="font-bold font-style: italic font-italics"><Link href="https://www.fox-ess.com" target="_blank">Read more here</Link></span>

                </div>
            </div>
        </div>
    </MainLayout>
    )
}

export default Partners
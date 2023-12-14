import Link from "next/link"

export const StoreCardComponent = () => {
  return (

    <div className="flex justify-center mb-12">
        <div className="grid grid-cols-2 gap-12">

                <div className="card w-96 h-80 bg-white shadow-xl py-3 relative pr-6">
                       <figure className="w-full h-2/3 ml-auto"><img className="ml-28 w-full h-full object-cover" src="/ladderhq.jpeg" alt="Shoes" /></figure>
                            <h2 className="card-title ml-6 my-4">Lifting solutions</h2>
                            <div className="card-actions ml-6">
                            <Link href="/shop/lifting"><button className="btn btn-accent">View Products</button></Link>
                            </div>                            
                </div>
                <div className="card w-96 h-80 bg-white shadow-xl py-3 relative pr-6">
                    <figure className="w-full h-2/3 ml-auto"><img className="ml-28 w-full h-full object-contain" src="/solarpanel.jpeg" alt="Shoes" /></figure>
                            <h2 className="card-title ml-6 my-4">Solar panels</h2>
                            <div className="card-actions ml-6">
                            <Link href="/shop/solarpanel"><button className="btn btn-accent">View Products</button></Link>
                            </div>                            
                </div>

                <div className="card w-96 h-80 bg-white shadow-xl py-3 relative pr-6">
                <figure className="w-full h-2/3 ml-auto"><img className="ml-28 w-full h-full object-contain" src="/hardware.jpeg" alt="Shoes" /></figure>
                            <h2 className="card-title ml-6 my-4">Mounting solutions</h2>
                            <div className="card-actions ml-6">
                            <Link href="/shop/mounting"><button className="btn btn-accent">View Products</button></Link>
                            </div>                            
                </div>
                <div className="card w-96 h-80 bg-white shadow-xl py-3 relative pr-6">
                       <figure className="w-full h-2/3 ml-auto"><img className="ml-28 w-full h-full object-contain" src="/battery.png" alt="Shoes" /></figure>
                            <h2 className="card-title ml-6 my-4">Inverters</h2>
                            <div className="card-actions ml-6">
                                <Link href="/shop/inverter"><button className="btn btn-accent">View Products</button></Link>
                            </div>                            
                </div>

            </div>

        </div>
    )
}
  


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from "@/context/cart"

import './globals.css'


export const metadata = {
  title: 'Grön Horisont',
  description: 'Grön Horisont',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer/>
            <Navbar/>
            <CartProvider>
             {children}
            </CartProvider>
            <Footer/>

      </body>
    </html>
  )
}

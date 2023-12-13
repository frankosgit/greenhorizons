import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from "@/context/cart"
import { UserContextProvider } from "@/context/usercontext"

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
          <UserContextProvider>
            <CartProvider>
              <Navbar/>
              {children}
            </CartProvider>
              <Footer/>
          </UserContextProvider>
      </body>
    </html>
  )
}

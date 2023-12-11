"use client"

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode, Provider } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    url: string;
    priceOnQuote: boolean;
    category: string;
    company: string;
    stock: boolean;
}


type ContextProps = {
    getCart: () => Product[]; 
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    isItemAdded: boolean;
    isItemAddedToCart: (product: Product) => void; 
    setIsItemAdded: React.Dispatch<React.SetStateAction<boolean>>;
    cartCount: () => number | undefined;
    cartTotal: () => number | undefined;
    clearCart: () => void;
  };
  
  const Context = createContext<ContextProps | null>(null);


type ProviderProps = {
    children: React.ReactNode;
}


export default function Provider({ 
    children,
 }: ProviderProps) {
    const router = useRouter();
    const [isItemAdded, setIsItemAdded] = useState<boolean>(false)


    const getCart = () => {
        let cart: Product[] = []

        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
        }
    }
    return cart

}

    const  addToCart = (product: Product) => {
        let cart = []
        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
            }
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            isItemAddedToCart(product)
            router.refresh()
        }
    }

    const removeFromCart = (product: Product) => {
        let cart = []
        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
            }
            cart = cart.filter((item: Product) => item.id !== product.id)
            localStorage.setItem('cart', JSON.stringify(cart))
            isItemAddedToCart(product)
            router.refresh()
        }
    }


    const isItemAddedToCart = (product: Product) => {
        let cart = []
        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
            }
            cart = cart.filter((item: Product) => item.id === product.id)
            if (cart.length > 0) {
                setIsItemAdded(true)
                return
            } else {
                setIsItemAdded(false)
            }
        }
    }

    const cartCount = () => {
        let cart = []
        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
            }
            return cart.length
        }
    }

    const cartTotal = () => {
        let cart = []
        let total = 0
        if (typeof localStorage !== 'undefined') {
            const storedCart = localStorage.getItem('cart')

            if (storedCart !== null) {
                cart = JSON.parse(storedCart)
            }
            for (let i = 0; i < cart.length; i++) {
                const element = cart[i];
                total += element.price
            }
            return total
        }
    }


    const clearCart = () => {
        localStorage.removeItem('cart')
        router.refresh()
    }


    const exposed = {
        getCart,
        addToCart,
        removeFromCart,
        isItemAddedToCart,
        cartCount,
        cartTotal,
        clearCart,
        isItemAdded,
        setIsItemAdded
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}


export type { ContextProps }

export const useCart = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };

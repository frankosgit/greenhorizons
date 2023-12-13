"use client"
import { useUser } from '@/context/usercontext'
import React from 'react'
import TextInput from '@/components/text-input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useUserAddress from '../hooks/useUserAddress'

const page = () => {

    const user = useUser()
    const router = useRouter()

    const [addressId, setAddressId] = useState<string | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [address, setAddress] = useState<string | null>(null)
    const [city, setCity] = useState<string | null>(null)
    const [zip, setZip] = useState<string | null>(null)
    const [country, setCountry] = useState<string | null>(null)
    const [isUpdatingAddress, setIsUpdatingAddress] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const showError = (type) => {
        if (Object.entries(error).length > 0 && error?type == type) {
            return error?.message
            }   
        return ''
    }

    const getAddress = async () => {
        const response = await useUserAddress()
        if (response) {
            setTheCurrentAddress(response)
            return
        }
    }

    useEffect(()=> {
        
    })


  return (
    <div 
        id= "AddressPAge"
        className= 'mt-4 max-w-[600px] mx-auto px-2'
    >
        <div className='mx-auto bg-white rounded-lg p-3 font-mono'>
            
            <div className='text-xl text-bold mb-2'>Address details</div>

                <form action="">
                    <div className='mb-4'>
                        <TextInput
                        className='w-full'
                        string= {'test'}
                        placeholder='name'
                        error= {'ello'}
                        onUpdate= {() => console.log('test')}
                        />
                        <button className="btn btn-primary ml-6 mt-8">Update address</button>
                    </div>
                </form>
        </div>


    </div>
  )
}

export default page
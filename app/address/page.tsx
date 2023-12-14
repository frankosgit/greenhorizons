"use client"
import { useUser } from '@/context/usercontext'
import React, { use } from 'react'
import TextInput from '@/components/text-input'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import useUserAddress from '../hooks/useUserAddress'
import useIsLoading from '../hooks/useIsLoading'

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

/*  const showError = (type) => {
        if (Object.entries(error).length > 0 && error?type == type) {
            return error.message
            }   
        return ''
    } */

    const getAddress = async () => {
        if(user?.id == null || user?.id == undefined) {
            useIsLoading(false)
            return
        }
        const response = await useUserAddress()
        if (response) {
            setTheCurrentAddress(response)
            useIsLoading(false)
            return
        }
        useIsLoading(false)
    }

    useEffect(()=> {
        useIsLoading(true)
        getAddress()
    }, [user])
 

    const setTheCurrentAddress = (result) => {
        setAddressId(result.id)
        setName(result.name)
        setAddress(result.address)
        setCity(result.city)
        setZip(result.zip)
        setCountry(result.country)
    }

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
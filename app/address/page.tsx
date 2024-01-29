"use client"
import { useUser } from '@/context/usercontext'
import TextInput from '@/components/text-input'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import useUserAddress from '../hooks/useUserAddress'
import useIsLoading from '../hooks/useIsLoading'
import MainLayout from '../layouts/mainlayout'
import address from '@/types/address'
import { toast } from 'react-toastify'

const page = () => {
    type ErrorState = {
        [key: string]: { type: string; message: string };
      };

    const user = useUser()
    const router = useRouter()
  

    const [addressId, setAddressId] = useState<number | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [address, setAddress] = useState<string | null>(null)
    const [city, setCity] = useState<string | null>(null)
    const [postcode, setPostcode] = useState<number | null>(null)
    const [country, setCountry] = useState<string | null>(null)
    const [isUpdatingAddress, setIsUpdatingAddress] = useState<boolean>(false)
    const [error, setError] = useState<ErrorState>({})



    const showError = (type: string) => {
        if (error[type]) {
          return error[type].message;
        }
        return '';
      };

    const getAddress = async () => {
        if(user?.id == null || user?.id == undefined) {
            useIsLoading(false)
            return
        }
        const response = await useUserAddress()
        if (response && response.address) {
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
 

    const setTheCurrentAddress = (result: address) => {
        setAddressId(result.id)
        setName(result.name)
        setAddress(result.address)
        setCity(result.city)
        setPostcode(result.postcode)
        setCountry(result.country)
    }

    const validate = () => {
        setError({}); 
        let isError = false;
      
        if (!name) {
          setError({ name: { type: 'name', message: 'Please enter a name' } });
          isError = true;
        } else if (!address) {
          setError({ address: { type: 'address', message: 'Please enter an address' } });
          isError = true;
        } else if (!city) {
          setError({ city: { type: 'city', message: 'Please enter a city' } });
          isError = true;
        } else if (!country) {
          setError({ country: { type: 'country', message: 'Please enter a country' } });
          isError = true;
        } else if (!postcode) {
          setError({ postcode: { type: 'postcode', message: 'Please enter a postcode' } });
          isError = true;
        }
      
        return isError;
      };
      

    const submit = async (event: React.FormEvent) => {
        event.preventDefault()
        let isError = validate()

        if(isError) {
            const firstErrorMessage = Object.values(error)[0]?.message;
            toast.error(firstErrorMessage, {autoClose:3000})
            return
        }
        try {
            setIsUpdatingAddress(true)
            const rest = await useCreateAddress({
                addressId,
                name,
                address,
                city,
                postcode,
                country,
            })
        }
    }

  return (
    <MainLayout>
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
                            error= {'hello'}
                            onUpdate= {() => console.log('test')}
                            />
                            <button className="btn btn-primary ml-6 mt-8">Update address</button>
                        </div>
                    </form>
            </div>


        </div>
    </MainLayout>
  )
}

export default page
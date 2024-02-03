'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { User } from '@supabase/supabase-js'

export type userContextType = {
    avatar_url?: string | null
    full_name?: string | null
    id?: string | null
    updated_at?: string | null
    name?: string | null
    website?: string | null
    signOut: () => Promise<void>; 
    email?: string | null

};

type userContextProviderType = {
    children: React.ReactNode;
};



export const userContext = createContext({} as userContextType);

export const UserContextProvider = ({ children }: userContextProviderType) => {
    const router = useRouter();

    const [user, setUser] = useState<User | null>(null);
    const [id, setId] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [picture, setPicture] = useState<string | null>(null);

    const supabaseClient = createClientComponentClient()

    const getCurrentSession = async () => {
        const res = await supabaseClient.auth.getSession()
        if (res && res.data.session) {
            return res.data.session
        }
      
        return null
    }

    const getCurrentUser = async () => {
        if (id) return
        
        const res = await supabaseClient.auth.getUser()
        if (res && res.data.user) {
            const theUser = res.data.user



            if (theUser) {
                setUser(theUser)
            }

            setId(theUser?.id)

            if (theUser?.email) {
            setEmail(theUser.email)
            }
            
            if (theUser.identities && theUser.identities[0]?.identity_data) {
                setName(theUser.identities[0]?.identity_data?.name || "unknown user");
                setPicture(theUser.identities[0]?.identity_data?.picture || "dummyimageurl");
              } else {
                setName("unknown user");
                setPicture("dummyimageurl");
              }
        }
    }


    useEffect(() => {
        const isUser = async () => {
            const currentSession = await getCurrentSession()
            if (currentSession) {
                await getCurrentUser()
            }
        }
        isUser()
        }, [])

        const signOut = async () => {
            if (supabaseClient.auth) {
              await supabaseClient.auth.signOut();
              clearUser();
              router.push('/');
            } else {
              console.error("Supabase auth client is undefined");
            }
          };

        const clearUser = () => {
            setUser(null)
            setId(null)
            setEmail(null)
            setName(null)
            setPicture(null)
        }


    const exposed = {user, id, email, name, picture, signOut, setUser}

    return  <userContext.Provider value={exposed}>{children}</userContext.Provider>
};


export const useUser = () => useContext(userContext)

export default UserContextProvider
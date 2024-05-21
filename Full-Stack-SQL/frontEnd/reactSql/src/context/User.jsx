import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'
import baseUrl from '../config/baseUrl'

export const UserContext = createContext({})

export default function UserProvider({ children }) {
    const [user, setuser] = useState(null)

    const logUser = async ()=>{
        try{
            
        }
    }
    const shared = { user }

    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    )
}
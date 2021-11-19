import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase"

AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    
    function signup(email, password) {
        return auth.createUserWithEmailandPassword(email, password)
    }

    
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user=> {
            setCurrentUser(user)
        })
    return unsubscribe
},[])
    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

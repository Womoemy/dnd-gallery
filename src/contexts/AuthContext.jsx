import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { auth, signIn } from '../firebase';

export const AuthContext = React.createContext()

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    function login(email, password) {
        return signIn(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            console.log(user);
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
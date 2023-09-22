import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { auth, signIn } from '../firebase';

export const Context = React.createContext()

// eslint-disable-next-line react/prop-types
export function AuthContext({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [loading, setLoading] = useState(false)

    function login(email, password) {
        return signIn(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    const value = {
        token,
        setToken,
        login,
        logout,
        loading,
        setLoading
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
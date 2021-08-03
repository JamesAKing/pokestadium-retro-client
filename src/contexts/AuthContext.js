import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(authContext);
};

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // Functions determing how client handles auth and state

    const registerUser = () => {};

    const loginUser = () => {};

    const logoutUser = () => {};

    useEffect(() => {
        const unsubscribe = user => {
            if (user) {
                setUser(user)
                setLoading(false);
            } else {
                setUser(null)
            };
        };

        return () => unsubscribe();
    }, []);

    const value = {
        registerUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
import React, { useState, useEffect, useContext, createContext } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState();
    // const [ loading, setLoading ] = useState(true);

    // Functions determing how client handles auth and state
    // const registerUser = () => {};

    const loginUser = (token) => {
        const decodedToken = jwt_decode(token);
        if (decodedToken.playerId) setUser({
            token: token,
            player: decodedToken
        });
    };

    const logoutUser = () => {};

    useEffect(() => {
        const unsubscribe = user => {
            if (user) {
                setUser(user)
                // setLoading(false);
            } else {
                setUser(null)
            };
        };

        return () => unsubscribe();
    }, []);

    const value = {
        user, 
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
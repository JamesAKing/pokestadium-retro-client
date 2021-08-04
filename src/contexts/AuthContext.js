import React, { useState, useEffect, useContext, createContext } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { logoutURL } from '../utilities/apiURLs';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};


export function AuthProvider({ children }) {
    const [ user, setUser ] = useState();
    console.log(user);
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

    const logoutUser = async () => {
        try {
            const resp = await axios.delete(logoutURL, { data : {token : user.token} });
            setUser(null);
        } catch (err) {
            console.log(err);
        };
        // delete jwt token + refresh token
        // setUser(null);
    };

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
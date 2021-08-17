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

    // Functions determine how client handles auth and state
    // const registerUser = () => {};

    const loginUser = async (loginURL, loginData) => {
        try {
            const resp = await axios.post(loginURL, loginData)
            const token = resp.data.accessToken;

            const decodedToken = jwt_decode(token);
            if (decodedToken.playerId) {
                setUser({
                    token: token,
                    player: decodedToken
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const logoutUser = async () => {
        try {
            await axios.delete(logoutURL, { data : {token : user.token} });
            setUser(null);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        const unsubscribe = user => {
            if (user) {
                setUser(user)
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
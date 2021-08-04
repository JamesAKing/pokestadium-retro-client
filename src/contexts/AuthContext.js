import React, { useState, useEffect, useContext, createContext } from 'react';
import jwt_decode from 'jwt-decode';


// TEST: Add to loginUser Function

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const decoded = jwt_decode(token);

decoded && console.log(decoded);

// End of Test



const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState();
    // const [ loading, setLoading ] = useState(true);

    // Functions determing how client handles auth and state
    const registerUser = () => {};

    const loginUser = () => {};

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
        registerUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
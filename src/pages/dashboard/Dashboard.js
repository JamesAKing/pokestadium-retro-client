import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { userRecordURL } from '../../utilities/apiURLs';

function Dashboard() {

    const { user } = useAuth();

    const [ userData, setUserData ] = useState([]);
    //Decide if this is a good way to handle API errors? 
    const [ apiError, setApiError ] = useState('');

    const userId = 'james';


    useEffect(() => {
        getUserRecord(userId);
    }, []);

    const getUserRecord = async userId => {
        try {
            const resp = axios.get(userRecordURL, { userId });
            setUserData(resp.data);
        } catch (err) {
            console.log(err);
            setApiError(err);
        };
    };

    if (apiError) return <p>Error retrieving data from server. See console for details</p>;

    return (
        <div>
            Dashboard
            <p>{user}</p>
        </div>
    );
}

export default Dashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { userRecordURL } from '../../utilities/apiURLs';

function Dashboard() {

    const { user } = useAuth();

    const [ userData, setUserData ] = useState();
    //Decide if this is a good way to handle API errors? 
    const [ apiError, setApiError ] = useState('');

    useEffect(() => {
        getUserRecord(user);
    }, [user]);

    const getUserRecord = async user => {
        const { token } = user;

        try {
            const resp = await axios.get(userRecordURL, {
                headers : {
                    'authorization' : `Bearer ${token}`
                }
            });
            setUserData(resp.data);
        } catch (err) {
            console.log(err);
            setApiError(err);
        }
    };

    console.log(userData.player.firstName);

    if (apiError) return <p>Error retrieving data from server. See console for details</p>;

    return (
        <div>
            Dashboard
            {userData ? 
                <p>{`Welcome ${userData.player.firstName}`}</p>:
                <p>Getting User Data</p>
            }
        </div>
    );
}

export default Dashboard;
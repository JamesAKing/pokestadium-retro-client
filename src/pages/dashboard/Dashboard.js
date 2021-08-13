import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { userRecordURL } from '../../utilities/apiURLs';
import PokeballLoading from '../../components/loading-pokeball/PokeballLoading';
import UserRecord from '../../components/user-record/UserRecord';
import Pokedex from '../../components/pokedex/Pokedex';
import BattleArena from '../../components/battle-arena/BattleArena';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
function Dashboard() {

    const { user } = useAuth();
    const [ userData, setUserData ] = useState();
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

    if (apiError) return <p>Error retrieving data from server. See console for details</p>;

    return (
        <PageWrapper>
            <div>
                Dashboard
                {!userData ?
                    <PokeballLoading /> :
                    <div>
                        <UserRecord userData={userData} />
                        {/* Pokemon Parties */}
                        <Pokedex />
                        <BattleArena />
                    </div>
                }
            </div>
        </PageWrapper>
    );
}

export default Dashboard;
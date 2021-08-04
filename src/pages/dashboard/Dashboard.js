import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Dashboard() {

    const { user } = useAuth();

    return (
        <div>
            Dashboard
            <p>{user}</p>
        </div>
    );
}

export default Dashboard;
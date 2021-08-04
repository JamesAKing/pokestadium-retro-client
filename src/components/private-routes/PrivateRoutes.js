import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginURL } from '../../utilities/routerURLs';

function PrivateRoutes({ component: Component, ...rest }) {

    const { user } = useAuth();

    // Is this readable?

    if (user) console.log('there is a user');

    return (
        <Route {...rest} render={props => {
            return user ?
                <Component {...props} /> :
                <Redirect to={loginURL} />
        }}>
        </Route>
    );

}

export default PrivateRoutes;
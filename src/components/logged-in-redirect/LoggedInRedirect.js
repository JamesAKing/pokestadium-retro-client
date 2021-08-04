import React from 'react';
import { Redirect } from 'react-router-dom';

function LoggedInRedirect({ redirectTo }) {

    return <Redirect to={redirectTo} />

};

export default LoggedInRedirect;
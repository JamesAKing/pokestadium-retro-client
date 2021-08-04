import React from 'react';
import { Redirect } from 'react-router-dom';
import { dashboardURL } from '../../utilities/routerURLs';

function LoggedInRedirect() {

    return <Redirect to={dashboardURL} />
}

export default LoggedInRedirect;
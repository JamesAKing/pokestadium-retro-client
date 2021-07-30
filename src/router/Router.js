import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';
import RegisterPage from '../pages/register/Register';
import {
    homeURL,
    loginURL,
    registerURL
} from '../utilities/routerURLs';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={homeURL} component={HomePage} />
                <Route path={loginURL} component={LoginPage} />
                <Route path={registerURL} component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
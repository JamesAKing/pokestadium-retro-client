import './Hamburger.scss'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
    homeURL,
    loginURL,
    registerURL,
    dashboardURL
} from '../../utilities/routerURLs';

function Hamburger() {

    const { user, logoutUser } = useAuth(); 
    const [ menuVisible, setMenuVisible ] = useState(true);

    return (
        <div className="hamburger">
            <div className="hamburger__icon" onClick={() => setMenuVisible(!menuVisible)}>
                <div className="hamburger__icon-dot"></div>
                <div className="hamburger__icon-dot"></div>
                <div className="hamburger__icon-dot"></div>
            </div>
            <nav className={`hamburger__nav ${menuVisible ? "hamburger__nav--active" : "hamburger__nav--inactive"}`}>
                <ul className="hamburger__nav-items">
                    <li className="hamburger__nav-item">
                        <NavLink className="hamburger__link" exact to={homeURL} activeClassName="hamburger__link--selected" onClick={() => setMenuVisible(false)}>Home</NavLink>
                    </li>
                    {!user && <li className="hamburger__nav-item">
                        <NavLink className="hamburger__link" to={loginURL} activeClassName="hamburger__link--selected" onClick={() => setMenuVisible(false)}>Login</NavLink>
                    </li>}
                    {!user && <li className="hamburger__nav-item">
                        <NavLink className="hamburger__link" to={registerURL} activeClassName="hamburger__link--selected" onClick={() => setMenuVisible(false)}>Register</NavLink>
                    </li>}
                    {user && <li className="hamburger__nav-item">
                        <NavLink className="hamburger__link" to={dashboardURL} activeClassName="hamburger__link--selected" onClick={() => setMenuVisible(false)}>Dashboard</NavLink>
                    </li>}
                    {user && <li className="hamburger__nav-item">
                        <button type="button" onClick={logoutUser}>Log Out</button>
                    </li>}
                </ul>
            </nav>
        </div>
    );
}

export default Hamburger;
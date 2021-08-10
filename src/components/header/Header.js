import './Header.scss';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import {
    homeURL,
    loginURL,
    registerURL,
    dashboardURL
} from '../../utilities/routerURLs';
import Hamburger from '../hamburger/Hamburger';

function Header() {

    const { user, logoutUser } = useAuth();

    return (
        <>
        <div className="header__spacer"></div>
        <Hamburger />       
        <header className="header">
            <div className="header__pokeball"></div>
            <nav className="header__nav">
                <ul className="header__nav-items">
                    <li className="header__nav-item">
                        <NavLink to={homeURL} activeClassName="header__link--selected">Home</NavLink>
                    </li>
                    {!user && <li className="header__nav-item">
                        <NavLink to={loginURL} activeClassName="header__link--selected">Login</NavLink>
                    </li>}
                    {!user && <li className="header__nav-item">
                        <NavLink to={registerURL} activeClassName="header__link--selected">Register</NavLink>
                    </li>}
                    {user && <li className="header__nav-item">
                        <NavLink to={dashboardURL} activeClassName="header__link--selected">Dashboard</NavLink>
                    </li>}
                    {user && <li className="header__nav-item"><button type="button" onClick={logoutUser}>Log Out</button></li>}
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;
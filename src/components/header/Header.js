import './Header.scss';
import { NavLink } from 'react-router-dom';
import {
    homeURL,
    loginURL,
    registerURL,
    dashboardURL
} from '../../utilities/routerURLs';

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-items">
                    <li className="header__nav-item">
                        <NavLink to={homeURL} activeClassName="header__link--selected">Home</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to={loginURL} activeClassName="header__link--selected">Login</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to={registerURL} activeClassName="header__link--selected">Register</NavLink>
                    </li>
                    {/* Temp Link */}
                    <li className="header__nav-item">
                        <NavLink to={dashboardURL} activeClassName="header__link--selected">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
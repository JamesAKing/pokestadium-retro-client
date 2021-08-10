import './Hamburger.scss'
import React, { useState } from 'react';

function Hamburger() {

    const [ menuVisible, setMenuVisible ] = useState(false);

    console.log(menuVisible)

    return (
        <div className="hamburger">
            <div className="hamburger__icon" onClick={() => setMenuVisible(!menuVisible)}>
                <div className="hamburger__icon-dot"></div>
                <div className="hamburger__icon-dot"></div>
                <div className="hamburger__icon-dot"></div>
            </div>
            <div className={`hamburger__menu ${menuVisible ? "hamburger__menu--active" : "hamburger__menu--inactive"}`}>

            </div>
        </div>
    );
}

export default Hamburger;
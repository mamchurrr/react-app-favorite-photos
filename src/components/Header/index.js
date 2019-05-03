import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
/* eslint-disable no-unused-vars */

import React from 'react';
import user from '../../images/user_photo.avif'
import "./Header.css"

const Header = () => {
    return (
        // Navbar Part
        <nav>
            <h2>Knowledge Cafe</h2>
            <div className='navbar-details'>
                <div>
                    <a href="Home">Home</a>
                    <a href="Membership">Membership</a>
                    <a href="About Us">About Us</a>
                    <a href="LogIn">LogIn</a>
                </div>
                {/* User image */}
                <img className='user-img' src={user} alt="User-Image" />
            </div>
        </nav>
    );
};

export default Header;
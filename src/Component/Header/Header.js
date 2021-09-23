import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
            <img src={logo} alt="" />
            </header>
        </div>
    );
};

export default Header;
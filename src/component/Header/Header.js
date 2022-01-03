import React from 'react';
import './Header.css'
import logo from '../../images/elearning.jpg'

const Header = () => {
    return (
        <div className='logo'>
                <img src={logo} alt="" />
        </div>
    );
};

export default Header;
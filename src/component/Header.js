import React from 'react';
import '../css/Header.css';
import Logo from './Logo';
import Header_Category from './Header_Category';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const isWhiteHeader = location.pathname === '/';

    return (
        <div className={`Header_container ${isWhiteHeader ? 'white-header' : 'black-header'}`}>
            <Logo className="Header_Logo" />
            <Header_Category />
            <Link to="/Login" className="Header_Login">
                Log in
            </Link>
        </div>
    );
}

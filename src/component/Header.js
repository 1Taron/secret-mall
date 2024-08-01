import React from 'react';
import '../css/Header.css';
import Logo from './Logo';
import Header_Category from './Header_Category';

export default function Header() {
    return (
        <div className="Header_container">
            <Logo className="Header_Logo" />
            <Header_Category />
            <a href="/Login" className="Header_Login">
                Log in
            </a>
        </div>
    );
}

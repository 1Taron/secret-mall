import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header_Category.css';

export default function Header_Category() {
    return (
        <>
            <div className="Header_Category">
                <Link to="/Charactor" className="Header_Category_Link">
                    Character
                </Link>
                <Link to="/Clothes" className="Header_Category_Link">
                    Clothes
                </Link>
                <Link to="/" className="Header_Category_Link">
                    Accessories
                </Link>
                <Link to="/" className="Header_Category_Link">
                    more...
                </Link>
            </div>
        </>
    );
}

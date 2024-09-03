import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Main_Category.css';

export default function Main_Category() {
    return (
        <>
            <div className="Main_Category">
                <Link
                    to="/Charactor"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 0.5s forwards' }}
                >
                    Character
                </Link>
                <Link
                    to="/Clothes"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 1.25s forwards' }}
                >
                    Clothes
                </Link>
                <Link
                    to="/Product"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 2s forwards' }}
                >
                    Accessories
                </Link>
                <Link
                    to="/Product"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 2.75s forwards' }}
                >
                    more...
                </Link>
            </div>
        </>
    );
}

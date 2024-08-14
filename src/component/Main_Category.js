import React from 'react';

import '../css/Main_Category.css';

export default function Main_Category() {
    return (
        <>
            <div className="Main_Category">
                <a
                    href="/Charactor"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 0.5s forwards' }}
                >
                    Charactor
                </a>
                <a
                    href="/Product"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 1.25s forwards' }}
                >
                    Clothes
                </a>
                <a href="/Product" className="Main_Category_Link category" style={{ animation: 'fadeIn 2s forwards' }}>
                    Accessories
                </a>
                <a
                    href="/Product"
                    className="Main_Category_Link category"
                    style={{ animation: 'fadeIn 2.75s forwards' }}
                >
                    more...
                </a>
            </div>
        </>
    );
}

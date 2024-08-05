import React from "react";

import "../css/Main_Category.css";

export default function Main_Category() {
    return (
        <>
            <div className="Main_Category">
                <a href="/" className="Main_Category_Link category" style={{ animation: 'fadeIn 1s forwards' }}>Charactor</a>
                <a href="/" className="Main_Category_Link category" style={{ animation: 'fadeIn 2s forwards' }}>Clothes</a>
                <a href="/" className="Main_Category_Link category" style={{ animation: 'fadeIn 3s forwards' }}>Accessories</a>
                <a href="/" className="Main_Category_Link category" style={{ animation: 'fadeIn 4s forwards' }}>more...</a>
            </div>
        </>
    );
}
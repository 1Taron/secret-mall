import React from "react";
import "../css/Header_Category.css";

export default function Header_Category() {
    return (
        <>
            <div className="Header_Category">
                <a href="/" className="Header_Category_Link">Charactor</a>
                <a href="/" className="Header_Category_Link">Clothes</a>
                <a href="/" className="Header_Category_Link">Accessories</a>
                <a href="/" className="Header_Category_Link">more...</a>
            </div>
        </>
    )
}
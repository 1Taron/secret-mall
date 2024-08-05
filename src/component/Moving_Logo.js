import React from "react";
import "../css/Moving_Logo.css";

export default function Moving_Logo({ className }) {
    return (
        <>
            <div className={className} style={{ display: 'flex', letterSpacing: '10px', textIndent: '10px' }}>
                <div className="DIM1">DIM</div>
                <div className="HUB1">HUB</div>
            </div>
        </>
    );
}
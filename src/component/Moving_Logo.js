import React from "react";
import "../css/Moving_Logo.css";

export default function Moving_Logo({ className }) {
    return (
        <>
            <div className={className} style={{ display: 'flex', letterSpacing: '10px', textIndent: '10px' }}>
                <div className="DIM">DIM</div>
                <div className="HUB">HUB</div>
            </div>
        </>
    );
}
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../css/Logo.css'

export default function Logo({ className }) {
    const navigate = useNavigate();

    const Dim_ClickEvent = () => {
        navigate('/');
    }


    return (
        <>
            <button className="DimHub_button" onClick={() => Dim_ClickEvent()}>
                <div className={className} style={{ display: 'flex', letterSpacing: '3px', textIndent: '3px' }}>
                    <div className="DIM">DIM</div>
                    <div className="HUB">HUB</div>
                </div>
            </button>
        </>
    );
}
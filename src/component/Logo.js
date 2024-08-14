import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../css/Logo.css';

export default function Logo({ className }) {
    const navigate = useNavigate();

    const Dim_ClickEvent = () => {
        navigate('/');
    };

    const location = useLocation();

    const isWhiteHeader = location.pathname === '/';

    return (
        <>
            <button className="DimHub_button" onClick={() => Dim_ClickEvent()}>
                <div className={className} style={{ display: 'flex', letterSpacing: '3px', textIndent: '3px' }}>
                    <div className={`${isWhiteHeader ? 'whiteDIM' : 'blackDIM'}`}>DIM</div>
                    <div className={`${isWhiteHeader ? 'whiteHUB' : 'blackHUB'}`}>HUB</div>
                </div>
            </button>
        </>
    );
}

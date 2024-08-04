import React, { useEffect, useState } from 'react';
import '../css/main.css';

import Moving_Logo from '../component/Moving_Logo';
import Footer from '../component/Footer';

export default function Mainpage() {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // console.log('Scroll1 : ' + window.scrollY);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mainpage_container">
            <Moving_Logo className="Moving_logo" />
            {/* <footer className={showFooter ? 'show' : ''}>
                <Footer />
            </footer> */}
        </div>
    );
}

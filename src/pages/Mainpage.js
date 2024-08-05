import React, { useEffect, useState } from 'react';
import '../css/main.css';

import Main_1Page from '../component/Main_1Page';
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
            <Main_1Page />
            {/* <footer className={showFooter ? 'show' : ''}>
                <Footer />
            </footer> */}
        </div>
    );
}

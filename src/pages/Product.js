import React, { useEffect, useState } from 'react';
import '../css/products.css';

import Header from '../component/Header';
import Product_main from '../component/Product_main';
import Footer from '../component/Footer';

export default function Product() {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <div className="products_mainContainer">
                <Product_main />
                <footer className={showFooter ? 'show' : ''}>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

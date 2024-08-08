import React from 'react';
import '../css/Product_main.css';

import SearchBar from './SearchBar';
import Product_list from './Product_list';

export default function Product_main() {
    return (
        <>
            <div className="main_container">
                <SearchBar />
                <Product_list />
            </div>
        </>
    );
}

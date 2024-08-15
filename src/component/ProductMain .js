import React from 'react';
import '../css/Product_main.css';

import SearchBar from './SearchBar';
import Product_list from './Product_list';
import Clothes_list from './Clothes_list';
import { useLocation } from 'react-router-dom';

const category = {
    '/Charactor': Product_list,
    '/Clothes': Clothes_list,
};

export default function ProductMain() {
    const location = useLocation();

    const Category_List = category[location.pathname];

    return (
        <>
            <div className="main_container">
                <SearchBar />
                <Category_List />
            </div>
        </>
    );
}

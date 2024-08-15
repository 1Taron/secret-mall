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

export default function Product_main() {
    const location = useLocation();

    console.log(location.pathname);

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

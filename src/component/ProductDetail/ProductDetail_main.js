import React from 'react';
import ProductDetail_info from './ProductDetail_info';
import ProductDetail_side from './ProductDetail_side';
import ProductDetail_3d from './ProductDetail_3d';

export default function ProductDetail_main() {
    return (
        <>
            <div className="pdm_mainContainer">
                <ProductDetail_info />
                <ProductDetail_side />
                <ProductDetail_3d />
            </div>
        </>
    );
}

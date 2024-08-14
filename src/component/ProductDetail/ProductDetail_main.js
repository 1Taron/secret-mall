import React from 'react';
import ProductDetail_info from './ProductDetail_info';
import ProductDetail_side from './ProductDetail_side';
import ProductDetail_3d from './ProductDetail_3d';
import ProductDetail_3d_Rusk from './Charactor/Rusk/ProductDetail_3d_Rusk';
import ProductDetail_3d_XBot from './Charactor/XBot/ProductDetail_3d_XBot';
import ProductDetail_3d_Makina from './Charactor/Makina/ProductDetail_3d_Makina';

const product_3d = {
    default: ProductDetail_3d,
    Rusk: ProductDetail_3d_Rusk,
    Makina: ProductDetail_3d_Makina,
    XBot: ProductDetail_3d_XBot,
};

export default function ProductDetail_main({ productId }) {
    const p3dKey = productId ? productId : 'default';
    const ProductDetail3D = product_3d[p3dKey] || product_3d.default;
    return (
        <>
            <div className="pdm_mainContainer">
                <ProductDetail_info productId={productId} />
                <ProductDetail_side />
                <ProductDetail3D />
            </div>
        </>
    );
}

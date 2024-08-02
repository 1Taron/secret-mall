import React from "react";
import "../css/Product_list.css";

export default function Product_list() {
    return (
        <>
            <div className="Product_container">
                <button className="Product_button">
                    <img className="product_img"></img>
                    <p className="Product_name">이름</p>
                    <p className="product_owner">닉네임</p>
                    <p className="product_price">가격</p>
                </button>
            </div>
        </>
    );
}
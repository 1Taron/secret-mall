import React from 'react';
import '../css/Product_list.css';
import { useNavigate } from 'react-router-dom';

export default function Product_list() {
    const list = [
        { id: 'Rusk' },
        { id: 'Makina' },
        { id: 'XBot' },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
    ];

    const navigate = useNavigate();

    const handleProductClick = id => {
        navigate(`/Charactor/${id}`);
    };

    return (
        <>
            <div className="Product_container">
                <ul>
                    <div className="List_item">
                        {list.map(item => (
                            <li key={item.id} className="List_item_li">
                                <button className="Product_button" onClick={() => handleProductClick(item.id)}>
                                    <img className="product_img"></img>
                                    <p className="Product_name">{item.id}</p>
                                    <p className="product_owner">닉네임</p>
                                    <p className="product_price">가격</p>
                                </button>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
}

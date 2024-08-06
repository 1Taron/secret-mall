import React from 'react';
import '../../css/ProductDetail/ProductDetail_side.css';

export default function ProductDetail_side() {
    return (
        <>
            <div className="pds_infoContainer">
                <div className="pds_infobox">
                    <div className="pds_infoLayout">
                        <p className="pds_productName">"Karin" -Karin- [Original 3D model]</p>
                        <div>
                            <p>Amato and Rabbit</p>
                            <p>♡ 9824</p>
                        </div>
                    </div>
                    <div className="pds_paymentLayout">
                        <button className="pds_paymentBtn">결제</button>
                        <p>$ 50,000</p>
                    </div>
                </div>
                <div className="pds_line" />
                <div className="pds_noticebox">
                    <h4>About shipping</h4>
                    <br />

                    <h4>Shipped from warehouse</h4>
                    <p>These products are shipped from BOOTH warehouse as soon as payment is confirmed.</p>
                    <br />

                    <h4>Shipped from home</h4>
                    <p>
                        These products are packed and shipped from the seller. "Ships within ~ days" are the estimated
                        number of days from when payment is confirmed at BOOTH until the item is shipped. Items shipped
                        by Anshin-BOOTH-Pack will be delivered anonymously.
                    </p>
                    <br />

                    <h4>Download item</h4>
                    <p>
                        You will be able to download these products from "Purchase History" at any time after payment is
                        confirmed.
                    </p>
                    <br />

                    <h4>Shipped from pixivFACTORY</h4>
                    <p>These products are manufactured and shipped by pixivFACTORY as soon as payment is confirmed.</p>
                </div>
            </div>
        </>
    );
}

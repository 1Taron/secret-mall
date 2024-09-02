import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductThumnails = [
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_01.jpg',
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_02.jpg',
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_03.jpg',
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_04.jpg',
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_05.jpg',
    'https://1Taron.github.io/secret-mall/images/Rusk_Character_img/img_06.jpg',
];

export default function PDI_ThumbnailSlider_Rusk() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mainSliderRef = useRef(null);
    const miniSliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => setSelectedIndex(current),
    };
    const miniSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };

    const handleThumbnailClick = index => {
        mainSliderRef.current.slickGoTo(index);
        setSelectedIndex(index);
    };

    return (
        <>
            <div className="pdi_infoThumbnail">
                <Slider ref={mainSliderRef} {...settings} className="pdi_ThumnailSwiper">
                    {ProductThumnails.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                        </div>
                    ))}
                </Slider>
                <div className="pdi_miniThumnailBox">
                    <Slider ref={miniSliderRef} {...miniSettings} className="pdi_miniThumnailSwiper">
                        {ProductThumnails.concat(ProductThumnails).map((image, index) => (
                            <div key={index} onClick={() => handleThumbnailClick(index % ProductThumnails.length)}>
                                <img
                                    src={image}
                                    alt={`Mini Thumbnail ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border:
                                            selectedIndex === index % ProductThumnails.length
                                                ? '2px solid black'
                                                : 'none',
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

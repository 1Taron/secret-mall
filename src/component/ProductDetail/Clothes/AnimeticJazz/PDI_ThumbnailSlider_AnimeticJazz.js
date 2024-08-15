import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductThumnails = [
    '/images/ProductThumnail/vrchat_img01.jpg',
    '/images/ProductThumnail/vrchat_img02.jpg',
    '/images/ProductThumnail/vrchat_img03.jpg',
    '/images/ProductThumnail/vrchat_img04.jpg',
    '/images/ProductThumnail/vrchat_img05.jpg',
    '/images/ProductThumnail/vrchat_img06.jpg',
    '/images/ProductThumnail/vrchat_img07.jpg',
];

export default function PDI_ThumbnailSlider_AnimeticJazz() {
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

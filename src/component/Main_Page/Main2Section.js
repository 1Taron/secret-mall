import React, { useEffect, useRef } from 'react';
import '../../css/Main_Page/Main_2Page.css';

export default function Main2Section() {
    const imgUrl_char = 'https://github.io/1Taron/secret-mall/images/MainPage_imgs/characterImg.jpg';
    const imgUrl_cloth = 'https://github.io/1Taron/secret-mall/images/MainPage_imgs/clothesImg.jpg';
    const imgUrl_unity = 'https://github.io/1Taron/secret-mall/images/MainPage_imgs/unityImg.jpg';

    const scrollTimeoutRef = useRef(null);

    const handleScroll = event => {
        // 스크롤 이벤트가 발생하면 이전 타이머를 클리어
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // 딜레이 후에 스크롤 이벤트 처리
        scrollTimeoutRef.current = setTimeout(() => {
            // 여기서 스크롤 이벤트 처리 로직을 추가
            console.log('Scroll event processed');
        }, 300); // 300ms 딜레이
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="Main2_Container">
                <div className="main2_mainInfo">
                    <h1 className="logo_font">Empowering creativity with 3D characters.</h1>
                    <p className="default_font">
                        Bring your projects to life with 3D characters, 3D clothes, and Accessories, ready for use in
                        film, games, interactive experiences and illustration.
                    </p>
                </div>
                <div className="main2_sectionContainer">
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_char} className="main2_img" alt="" />
                        </div>
                    </div>
                    <div className="main2_infolayout">
                        <h1 className="logo_font">Ready to Use Characters</h1>
                        <p className="default_font">
                            Browse a collection of high-quality 3D characters. From realistic to cartoon, fantasy to
                            sci-fi, there’s a character for every purpose. Each character comes fully textured and
                            rigged so you can use immediately in your creative projects.
                        </p>
                    </div>
                </div>
                <div className="main2_sectionContainer">
                    <div className="main2_infolayout">
                        <h1 className="logo_font">Stylish 3D Clothing</h1>
                        <p className="default_font">
                            Purchase unique 3D clothing to enhance your characters. With a variety of styles and
                            designs, you can enrich your creations and make them more appealing.
                        </p>
                    </div>
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_cloth} className="main2_img" alt="" />
                        </div>
                    </div>
                </div>
                <div className="main2_sectionContainer">
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_unity} className="main2_img" alt="" />
                        </div>
                    </div>
                    <div className="main2_infolayout">
                        <h1 className="logo_font">Unity-Compatible Projects</h1>
                        <p className="default_font">
                            Our 3D characters and clothing are compatible with Unity, allowing you to easily create
                            games and interactive projects. Unleash your creativity!
                        </p>
                    </div>
                </div>
                {/* <div className="main2_footer">
                    <Footer />
                </div> */}
            </div>
        </>
    );
}

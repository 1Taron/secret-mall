import React from 'react';
import '../../css/Main_Page/Main_2Page.css';
import Footer from '../../component/Footer';

export default function Main2Section() {
    const imgUrl_char = '/images/MainPage_imgs/characterImg.jpg';
    const imgUrl_cloth = '/images/MainPage_imgs/clothesImg.jpg';
    const imgUrl_unity = '/images/MainPage_imgs/unityImg.jpg';
    return (
        <>
            <div className="Main2_Container">
                <div className="main2_sectionContainer">
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_char} className="main2_img" />
                        </div>
                    </div>
                    <div className="main2_infolayout">
                        <h1 className="logo_font">Empowering creativity with 3D characters.</h1>
                        <p className="default_font">
                            Bring your projects to life with 3D characters, 3D clothes, and Accessories, ready for use
                            in film, games, interactive experiences and illustration.
                        </p>
                    </div>
                </div>
                <div className="main2_sectionContainer">
                    <div className="main2_infolayout">
                        <h1 className="logo_font">Ready to Use Characters</h1>
                        <p className="default_font">
                            Browse a collection of high-quality 3D characters. From realistic to cartoon, fantasy to
                            sci-fi, there’s a character for every purpose. Each character comes fully textured and
                            rigged so you can use immediately in your creative projects.
                        </p>
                    </div>
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_cloth} className="main2_img" />
                        </div>
                    </div>
                </div>
                <div className="main2_sectionContainer">
                    <div className="main2_imglayout">
                        <div className="main2_imgbox">
                            <img src={imgUrl_unity} className="main2_img" />
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

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

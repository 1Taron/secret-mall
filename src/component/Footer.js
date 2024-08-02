import React from 'react';
import '../css/footer.css';

import icon_github from '../svgs/github-brands-solid.svg';
import icon_instagram from '../svgs/instagram-brands-solid.svg';
import icon_xtwitter from '../svgs/x-twitter-brands-solid.svg';
import icon_discord from '../svgs/discord-brands-solid.svg';

export default function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="icon_container">
                    <img src={icon_github} alt="icon_github" className="footer_icon" />
                    <img src={icon_instagram} alt="icon_instagram" className="footer_icon" />
                    <img src={icon_xtwitter} alt="icon_xtwitter" className="footer_icon" />
                    <img src={icon_discord} alt="icon_discord" className="footer_icon" />
                </div>
                <div className="info_container">
                    <div>
                        <p>tel</p>
                        <p> : 010 - 1234 - 5270</p>
                    </div>
                    <div>
                        <p>adress</p>
                        <p> : 1 Cheongwadae-ro, Jongno-gu, Seoul, Republic of Korea</p>
                    </div>
                </div>
            </div>
        </>
    );
}

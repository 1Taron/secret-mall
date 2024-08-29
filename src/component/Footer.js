import React from 'react';
import '../css/footer.css';

import icon_github from '../svgs/github-brands-solid.svg';
import icon_instagram from '../svgs/instagram-brands-solid.svg';
import icon_xtwitter from '../svgs/x-twitter-brands-solid.svg';
import icon_discord from '../svgs/discord-brands-solid.svg';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const location = useLocation();

    const isMain = location.pathname === '/';

    return (
        <>
            <div className={`${isMain ? 'mainfooter' : 'footer_container'}`}>
                <div className="icon_container">
                    <FontAwesomeIcon icon={faGithub} className="footer_icon" />
                    <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
                    <FontAwesomeIcon icon={faXTwitter} className="footer_icon" />
                    <FontAwesomeIcon icon={faDiscord} className="footer_icon" />
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

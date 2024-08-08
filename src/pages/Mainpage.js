import React, { useEffect, useRef, useState } from 'react';
import '../css/main.css';

import Main_1Page from '../component/Main_Page/Main_1Page';
import Main_2Page from '../component/Main_Page/Main_2Page';
import Footer from '../component/Footer';

export default function Mainpage() {
    // scroll 이벤트
    const [currentSection, setCurrentSection] = useState(0);
    const sectionsRef = useRef([]);
    const isScrolling = useRef(false);

    const handleScroll1 = (event) => {
        event.preventDefault();
        if (isScrolling.current) return;

        isScrolling.current = true; // 스크롤 시작
        const direction = event.deltaY > 0 ? 1 : -1;
        const nextSection = currentSection + direction;
        if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
            setCurrentSection(nextSection);
        }

        setTimeout(() => {
            isScrolling.current = false; // 스크롤 종료
        }, 500); // 딜레이 시간 조정 가능
    };

    useEffect(() => {
        const handleWheel = (event) => handleScroll1(event);
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentSection]);


    //footer 이벤트
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // console.log('Scroll1 : ' + window.scrollY);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                transform: `translateY(-${currentSection * 100}vh)`,
                transition: 'transform 0.5s ease',
            }}
        >
            <div className="section" id="section1" ref={(el) => (sectionsRef.current[0] = el)}>
                <Main_1Page />
            </div>
            <div className="section" id="section2" ref={(el) => (sectionsRef.current[1] = el)}>
                <Main_2Page />
            </div>
            <div className="section" id="section3" ref={(el) => (sectionsRef.current[2] = el)}>
                Section 3
            </div>
        </div >
    );
}

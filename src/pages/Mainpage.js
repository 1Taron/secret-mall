import React, { useEffect, useRef, useState } from 'react';
import '../css/main.css';

import Main_1Page from '../component/Main_Page/Main_1Page';
import Main_2Page from '../component/Main_Page/Main_2Page';
import Main_3d from '../../src/component/Main_Page/Main_3d';
import Footer from '../component/Footer';
import Main_3Page from '../component/Main_Page/Main_3Page';

export default function Mainpage() {
    // scroll 이벤트
    const [currentSection, setCurrentSection] = useState(0);
    const sectionsRef = useRef([]);
    const isScrolling = useRef(false);

    const handleScroll1 = event => {
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
        const handleWheel = event => handleScroll1(event);
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentSection]);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Main_3d />
            <div
                style={{
                    transform: `translateY(-${currentSection * 100}vh)`,
                    transition: 'transform 0.5s ease',
                    position: 'relative',
                }}
            >
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className={index === 3 ? 'footer_section' : 'section'}
                        ref={el => (sectionsRef.current[index] = el)}
                    >
                        {index === 0 && <Main_1Page id="section1" />}
                        {index === 1 && <Main_2Page id="section2" />}
                        {index === 2 && <Main_3Page id="section3" />}
                        {index === 3 && <Footer />}
                    </div>
                ))}
            </div>
        </div>
    );
}

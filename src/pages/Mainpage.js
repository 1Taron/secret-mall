import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../css/main.css';
import Footer from '../component/Footer';

export default function Mainpage() {
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
        <div className="mainpage_container">
            <div className="main_content">
                <div className="Canvas_weight">
                    <Canvas>
                        <OrbitControls autoRotate={true} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[-1, 0, 1]} intensity={0.5} />
                        <mesh>
                            <boxGeometry args={[3, 3, 3]} />
                            <meshStandardMaterial attach="material" color={0xa3b18a} />
                        </mesh>
                    </Canvas>
                </div>
                <a href="/Product">Product page</a>
                <div>
                    <a href="/Login">Login page</a>
                </div>
                <div className="TEST">TEST</div>
                <div className="TEST">TEST</div>
            </div>

            <footer className={showFooter ? 'show' : ''}>
                <Footer />
            </footer>
        </div>
    );
}

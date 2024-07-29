import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
    return (
        <>
            <Canvas>
                <OrbitControls autoRotate={true} />
                <mesh>
                    <ambientLight intensity={1} />
                    <directionalLight position={[-1, 0, 1]} intensity={0.5} />
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial attach="material" color={0xa3b18a} />
                </mesh>
            </Canvas>
            <a href="" className="logo_font">
                asdasd
            </a>
        </>
    );
}

export default App;

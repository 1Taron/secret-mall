import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../css/main.css';

export default function Mainpage() {
    return (
        <>
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
        </>
    );
}

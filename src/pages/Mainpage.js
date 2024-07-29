import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Mainpage() {
    return (
        <>
            <Canvas>
                <OrbitControls autoRotate={true} />
                <ambientLight intensity={1} />
                <directionalLight position={[-1, 0, 1]} intensity={0.5} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial attach="material" color={0xa3b18a} />
                </mesh>
            </Canvas>
            <a href='/Product'>Product page</a>
        </>

    )
}

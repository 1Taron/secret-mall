<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Mainpage"
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  );
=======
>>>>>>> Stashed changes
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
                asd
            </a>
        </>
    );
<<<<<<< Updated upstream
=======
>>>>>>> 949408155852b0277cc89a21cbf2d018eb6b82ab
>>>>>>> Stashed changes
}

export default App;

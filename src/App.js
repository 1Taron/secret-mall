import './App.css'
import React from 'react';
import MainPage from './pages/Mainpage';
import Product from './pages/Product';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
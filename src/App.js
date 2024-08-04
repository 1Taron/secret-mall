import './App.css';
import React from 'react';
import MainPage from './pages/Mainpage';
import Product from './pages/Product';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/ProductDetail" element={<ProductDetailPage />} />
                <Route path="/Login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;

import './App.css';
import React, { useEffect } from 'react';
import MainPage from './pages/Mainpage';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Charactor" element={<Product />} />
                    <Route path="/Charactor/:productId" element={<ProductDetailWrapper />} />
                    <Route path="/Clothes" element={<Product />} />
                    <Route path="/Clothes/:productId" element={<ProductDetailWrapper />} />
                    <Route path="/Login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

function ProductDetailWrapper() {
    const { productId } = useParams();
    return <ProductDetailPage productId={productId} />;
}

export default App;

import './App.css';
import React, { useEffect } from 'react';
import MainPage from './pages/Mainpage';
import Product from './pages/Product';
import { Route, Routes, useParams } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="secret-mall/" element={<MainPage />} />
                <Route path="secret-mall/Charactor" element={<Product />} />
                <Route path="secret-mall/Charactor/:productId" element={<ProductDetailWrapper />} />
                <Route path="secret-mall/Clothes" element={<Product />} />
                <Route path="secret-mall/Clothes/:productId" element={<ProductDetailWrapper />} />
                <Route path="secret-mall/Login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

function ProductDetailWrapper() {
    const { productId } = useParams();
    return <ProductDetailPage productId={productId} />;
}

export default App;

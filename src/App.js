import './App.css';
import React from 'react';
import MainPage from './pages/Mainpage';
import Product from './pages/Product';
import { Route, Routes, useParams } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Charactor" element={<Product />} />
                <Route path="/Charactor/:productId" element={<ProductDetailWrapper />} />
                <Route path="/Login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

function ProductDetailWrapper() {
    const { productId } = useParams();
    return <ProductDetailPage productId={productId} />;
}

export default App;

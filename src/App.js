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
            <BrowserRouter>
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage />} />
                    <Route path={`${process.env.PUBLIC_URL}/Charactor`} element={<Product />} />
                    <Route path={`${process.env.PUBLIC_URL}/Charactor/:productId`} element={<ProductDetailWrapper />} />
                    <Route path={`${process.env.PUBLIC_URL}/Clothes`} element={<Product />} />
                    <Route path={`${process.env.PUBLIC_URL}/Clothes/:productId`} element={<ProductDetailWrapper />} />
                    <Route path={`${process.env.PUBLIC_URL}/Login`} element={<LoginPage />} />
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

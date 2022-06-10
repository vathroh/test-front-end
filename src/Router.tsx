import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './pages/products/AllProducts'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import Login from './pages/auth/Login'

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                    <Route path='all-products' element={<AllProducts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
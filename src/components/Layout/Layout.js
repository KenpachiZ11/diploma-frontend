import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
    return (
        <div className='main-layout'>
            <header><Header/></header>
            <main><Outlet/></main>
            <footer><Footer/></footer>
        </div>
    )
}

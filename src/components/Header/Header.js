import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { PersonCircle, BoxArrowInLeft } from 'react-bootstrap-icons'

export const Header = () => {
    const user = localStorage.getItem("user")
    return (
        <>
            <div className='header-wrapper'>
                <div className='header-wrapper__logo'>Creative World</div>
                <div className='header-wrapper__links'>
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/about'>Работы</NavLink></li>
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        {user && <li><NavLink to='/person'><PersonCircle /></NavLink></li>}
                        {!user && <li><NavLink to='/auth'><BoxArrowInLeft /></NavLink></li>}
                    </ul>
                </div>
            </div>
        </>
    )
}

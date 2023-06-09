import React , { useEffect, useContext, useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { PersonCircle, BoxArrowInLeft } from 'react-bootstrap-icons';
import Context from '../../Context';

export const Header = () => {
    const {user} = useContext(Context);
    // console.log(user.status)

    return (
        <>
            <div className='header-wrapper'>
                <div className='header-wrapper__logo'>Creative World</div>
                <div className='header-wrapper__links'>
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/about'>Работы</NavLink></li>
                        {user.status === 'author' && <li><NavLink to='/form'>Создать</NavLink></li>}
                        {user.status === 'admin' && <li><NavLink to='/form'>Создать</NavLink></li>}
                        {user.status === 'admin' && <li><NavLink to='/feedback-admin'>Обратная связь</NavLink></li>}
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        {user.email && <li><NavLink to='/person'><PersonCircle /></NavLink></li>}
                        {!user.email && <li><NavLink to='/auth'><BoxArrowInLeft /></NavLink></li>}
                    </ul>
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PersonCircle, BoxArrowInLeft } from 'react-bootstrap-icons'
import './Footer.scss';

export const Footer = () => {
    const user = localStorage.getItem("user")

    // const [date, setDate] = useState();

    // useEffect(() => {
    //     const day = new Date().getDay();
    //     const month = new Date().getMonth();
    //     const year = new Date().getFullYear();
    //     const minutes = new Date().getMinutes();
    //     const hours = new Date().getHours();

    //     setDate(new Date(year, month, day, hours, minutes));

    // console.log(date)

    // }, [date])


    return (
        <div className="footer">
            <div className="footer-row">
                <NavLink to='#'><i className="fa fa-facebook"></i></NavLink>
                <NavLink to='#'><i className="fa fa-instagram"></i></NavLink>
                <NavLink to='#'><i className="fa fa-youtube"></i></NavLink>
                <NavLink to='#'><i className="fa fa-twitter"></i></NavLink>
            </div>

            <div className="footer-row">
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/about'>Работы</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    {user && <li><NavLink to='/person'><PersonCircle /></NavLink></li>}
                    {!user && <li><NavLink to='/auth'><BoxArrowInLeft /></NavLink></li>}
                </ul>
            </div>

            <div className="footer-row__author">
                ITHub Copyright © 2023 ITHub - All rights reserved || Designed By: Bykovskij 
            </div>
        </div>
    )
}

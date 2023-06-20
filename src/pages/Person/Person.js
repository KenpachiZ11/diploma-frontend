import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context';
import './Person.scss';
import iconsAuthor from '../../images/iconsAuthor.png';

export const Person = () => {
    const { user, setUser } = useContext(Context);
    const nav = useNavigate();
    const { email, name, status } = user;
    // const [isLoggedin, setIsLoggedin] = useState(false);
    console.log(user)

    const logout = () => {
        localStorage.removeItem('user');
        setUser({})
        nav('/auth');
    }

    const create = () => {
        nav('/form');
    }

    // useEffect(() => {
        // logout();
    // }, [user]);

    return (
        <div className='person-page'>
            <div className='person-page__logo'>
                <img src={iconsAuthor} alt='person'></img>
            </div>
            <div className='person-page__info'>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>status: {status}</div>
            </div>
            <div className='person-page__buttons'>
                {
                    user.status === 'author' || 
                    user.status === 'admin' 
                    ? <button onClick={() => create()}>Создать</button> : null
                }
                <button onClick={() => logout()}>Выйти</button>
            </div>
            <div className='person-page__order'></div>
            {/* <div className='person-page__info'>
                <div>
                    <div>name: {name}</div>
                    <div>email: {email}</div>
                    <div>status: {status}</div>
                    <button onClick={() => logout()}>LogOut</button>
                </div>
                <div>
                    <img src={iconsAuthor} alt='person'></img>
                </div>
            </div>
            <div className='person-page__product'></div> */}
        </div>
    )
}

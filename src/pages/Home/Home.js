import React, { useEffect, useState } from 'react';
import './Home.scss';

export const Home = () => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000')
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    console.log(message)
    return (
        <div className='home-page'>
            <div className='home-page__header'>
                <div className='home-page__header-image'></div>
                <div className='home-page__header-title'>Идеи творческих людей</div>
            </div>
            <div className='home-page__main'>
                <div className='home-page__main-title'>Почему мы?</div>
                <div className='home-page__main-cards'>
                    <div className='cards-wrapper'>
                        <div className='cards-wrapper__image one-image'></div>
                        <div className='cards-wrapper__title'>Проверка Контента</div>
                    </div>
                    <div className='cards-wrapper'>
                        <div className='cards-wrapper__image two-image'></div>
                        <div className='cards-wrapper__title'>Авторские Эксклюзивы</div>
                    </div>
                    <div className='cards-wrapper'>
                        <div className='cards-wrapper__image three-image'></div>
                        <div className='cards-wrapper__title'>Поддержка 24/7</div>
                    </div>
                </div>
            </div>
            <div className='home-page__footer'>
                <div className='home-page__footer-title'>Партнеры</div>
                <div className='home-page__footer-text'>IThub College</div>
            </div>
        </div>
    )
}

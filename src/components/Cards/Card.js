import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss';

export const Card = ({ newPostData }) => {
    let display = null;

        if(!newPostData) {
            display = '404 Not Found!'
        }

        display = newPostData.map(result => {
            const { _id, title, linkImage} = result;

            return (
                <Link 
                    to={`https://danya.pewiwe.ru/about/${_id}`} 
                    key={_id}
                    className='about-page__link'
                >
                    <div className='about-page__card'>
                        <div className='about-page__card-image'>
                            <img 
                                src={linkImage}
                                alt={title}
                                className='about-page__card-image-img'
                            ></img>
                        </div>
                        <div className='about-page__card-title'>
                            {title}
                        </div>
                    </div>
                </Link>
            )
        });
        return (
        <>
            {display}
        </>
    )
}
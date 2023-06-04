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
                    to={`/about/${_id}`} 
                    key={_id}
                    className='about-page__link'
                >
                    <div className='about-page__card'>
                        <div className='about-page__card-image'>
                            <img 
                                // src='https://get.wallhere.com/photo/illustration-children-teddy-bears-sleeping-painting-artwork-fan-art-1464585.jpg' 
                                src={!!linkImage ? linkImage : 'https://images.prom.ua/2161063091_w640_h640_silikonovyj-nochnik-detskij.jpg'}
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
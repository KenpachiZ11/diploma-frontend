import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePageCard.scss';

export const SinglePageCard = () => {
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);

    useEffect(() => {
        fetch(`/about/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => { setNewPostData(res) })
    }, [id]);

    const { title, description, author, linkImage } = newPostData;

    console.log(newPostData, 'newPostData');

    return (
        <>
            {
                newPostData 
                ?
                <div className='single-page'>
                    <div className='single-page__image'>
                        <img 
                            src={linkImage} 
                            alt={title} 
                            className='single-page__image-img'
                        />
                    </div>
                    <div className='single-page__card'>
                        <div className='single-page__card-title'>{title}</div>
                        <div className='single-page__card-description'>{description}</div>
                        <div className='single-page__card-author'>Author: {author}</div>
                    </div>
                </div>
                :
                <h1>404 not found</h1>
            }
        </>
    )
}

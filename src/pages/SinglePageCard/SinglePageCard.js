import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePageCard.scss';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';

export const SinglePageCard = () => {
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);
    const [info, setInfo] = useState('Заказать работу');
    const [active, setActive] = useState(false);

    useEffect(() => {
        fetch(`/about/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => { setNewPostData(res) })
    }, [id]);

    const { title, description, author, linkImage } = newPostData;

    useEffect(() => {
        setInfo(info);
    }, [info]);

    // useEffect(() => {
    //     setActive(active => !active);
    // }, []);

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
                    <div className='single-page__button'>
                        <Button 
                            info={info} 
                            setActive={setActive}
                        />
                    </div> 
                    {
                        active ? <Modal 
                            newPostData={newPostData} 
                            active={active} 
                            setActive={setActive}
                        /> : ''
                    }
                </div>
                :
                <h1>404 not found</h1>
            }
        </>
    )
}

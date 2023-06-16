import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import './Cards.scss'
import { DataNull } from '../DataNull/DataNull';

const Cards = () => {
    const [newPostData, setNewPostData] = useState([]);

    useEffect(() => {
        fetch(`/about`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
        })
        .then(res => res.json())
        .then(res => setNewPostData(res))
    }, []);

    return (
        <>  
            {
                newPostData && newPostData.length > 0 
                    ? 
                        <div className='about-page__grid'><Card newPostData={newPostData}/></div>
                    : 
                        <DataNull/>
            }
        </>
    )
}

export default Cards
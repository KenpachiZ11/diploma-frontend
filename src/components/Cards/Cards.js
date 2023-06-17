import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import './Cards.scss'
import { DataNull } from '../DataNull/DataNull';
import { FilterComponentsCard } from '../FilterComponentsCard/FilterComponentsCard'

const Cards = () => {
    const [newPostData, setNewPostData] = useState([]);
    const [filter, setFilter] = useState(newPostData);

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


    const handleFilterItem = (e) => {
        const searchItem = e.target.value.toLowerCase();
        setFilter(newPostData.filter(el => el.title.toLowerCase().includes(searchItem)));
    };

    console.log(filter, 'filter');
    console.log(newPostData, 'newPostData');

    return (
        <>  
            {
                newPostData && newPostData.length > 0 
                    ?
                    <>
                        <FilterComponentsCard onChange={handleFilterItem}/>
                        <div className='about-page__grid'><Card newPostData={filter}/></div>
                    </>
                    : 
                        <DataNull/>
            }
        </>
    )
}

export default Cards
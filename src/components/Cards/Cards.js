import React, { useState, useEffect, useContext } from 'react';
import { Card } from './Card';
import './Cards.scss';
import Context from '../../Context';
import { DataNull } from '../DataNull/DataNull';
import { FilterComponentsCard } from '../FilterComponentsCard/FilterComponentsCard';

const Cards = () => {
    const {api} = useContext(Context);
    const [newPostData, setNewPostData] = useState([]);
    const [filter, setFilter] = useState(newPostData);

    useEffect(() => {
        api.about()
        .then(data => setNewPostData(data))
    }, []);
    useEffect(() => {
        setFilter(newPostData);
    }, [newPostData])


    const handleFilterItem = (e) => {
        const searchItem = e.target.value.toLowerCase();
        setFilter(newPostData.filter(el => el.title.toLowerCase().includes(searchItem)));
    };

    console.log(filter, 'filter');
    console.log(newPostData, 'newPostData');

    return (
        <>  
            {
                filter.length > 0 
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
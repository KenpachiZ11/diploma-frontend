import React, { useState, useEffect, useContext } from 'react';
import { Card } from './Card';
import './Cards.scss';
import Context from '../../Context';
import { DataNull } from '../DataNull/DataNull';
import { FilterComponentsCard } from '../FilterComponentsCard/FilterComponentsCard';

const Cards = () => {
    const {content} = useContext(Context);
    // const [newPostData, setNewPostData] = useState([]);
    const [filter, setFilter] = useState(content);

    
    // let id = null;

    // content.map(el => {
    //     const { _id } = el;

    // });
    // console.log(id)
    // useEffect(() => {
    //     api.about()
    //     .then(data => setNewPostData(data))
    // }, [api]);

    useEffect(() => {
        setFilter(content);
    }, [content]);
    
    // console.log(content)

    const handleFilterItem = (e) => {
        const searchItem = e.target.value.toLowerCase();
        setFilter(content.filter(el => el.title.toLowerCase().includes(searchItem)));
    };

    // console.log(filter, 'filter');
    // console.log(content, 'content');
    // console.log(newPostData, 'newPostData');

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
                    <>
                        <FilterComponentsCard onChange={handleFilterItem}/>
                        <DataNull/>
                    </>
            }
        </>
    )
}

export default Cards
import React from 'react';
import { Input } from 'antd';
import './FilterComponentsCard.scss';

// export const FilterComponentsCard = ({ setFilter }) => {
export const FilterComponentsCard = ({ onChange }) => {
    return (
        <>
            <Input 
                placeholder="Basic usage" 
                id='filterComponents' 
                onChange={onChange}
                // onChange={e => setFilter(e.target.value)}
            />
        </>
    )
}

import React from 'react';
import { Button as ButtonsOfOrder } from 'antd';
import './Button.scss';

export const Button = (props) => {

    // console.log(props)
    const handleClick = (e) => {
        e.preventDefault();
        props.setActive(true);
    }

    return (
        <ButtonsOfOrder 
            type="primary" 
            ghost 
            className='btn' 
            id='btn'
            onClick={(e) => handleClick(e)}
        >
            {props.info}
        </ButtonsOfOrder>
    )
}

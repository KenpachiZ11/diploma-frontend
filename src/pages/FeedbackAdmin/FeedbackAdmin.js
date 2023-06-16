import React, { useEffect, useState } from 'react';
import { DataNull } from '../../components/DataNull/DataNull';
import './FeedbackAdmin.scss';

export const FeedbackAdmin = () => {
    const [feedback, getFeedback] = useState([]);
    let display = null;

    useEffect(() => {
        fetch('/https://danya.pewiwe.ru/feedback-admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
        })
        .then(res => res.json())
        .then(res => getFeedback(res))
    }, [])

    console.log(feedback, 'feedback');

    display = feedback.map(el => {
        const { email, name, phone, sms, _id } = el;
        return(
            <div key={_id} className='feedback-admin__cards-box'>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Message: {sms}</div>
            </div>
        )
    });

    return (
        <div className='feedback-admin'>
            <div className='feedback-admin__title'>Страница обратной связи</div>
            {
                feedback && feedback.length > 0 
                ? <div className='feedback-admin__cards'>{display}</div>
                : <DataNull/>
            }
        </div>
    )
}

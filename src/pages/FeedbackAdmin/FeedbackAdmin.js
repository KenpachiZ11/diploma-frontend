import React, { useEffect, useState, useContext } from 'react';
import { DataNull } from '../../components/DataNull/DataNull';
import Context from '../../Context';
import './FeedbackAdmin.scss';

export const FeedbackAdmin = () => {
    const {api} = useContext(Context);
    const [feedback, getFeedback] = useState([]);
    let display = null;

    useEffect(() => {
        api.feedbackAdmin()
        .then(res => getFeedback(res))
    }, [])

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

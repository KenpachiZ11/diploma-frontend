import React from 'react';
import { Maps } from '../../components/Maps/Maps';
import './Contacts.scss';
import { Feedback } from '../../components/Feedback/Feedback';

export const Contacts = () => {
    return (
        <div className='contacts-page'>
            <div className='contacts-page__title'>Информация о нас</div>
            <Maps/>
            <div className='contacts-page__feedback'><Feedback/></div>
        </div>
    )
}

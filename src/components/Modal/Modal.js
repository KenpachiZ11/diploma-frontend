import React from 'react';
import './Modal.scss';

export const Modal = ({active, setActive, newPostData}) => {
    const { title, description, author, linkImage } = newPostData;

    return (
        <div className={active ? 'modal-content active' : 'modal-content'} onClick={() => setActive(false)}>
            <div className='modal-content__info' onClick={(e) => e.stopPropagation()}>
                <div>Ваша работа заказана</div>
                <div>Title: {title}</div>
                <div>Description: {description}</div>
                <div>Author: {author}</div>
                <img src={linkImage} alt={title}/>
            </div>
        </div>
    )
}

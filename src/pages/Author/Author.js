import React, { useState, useEffect, useContext } from 'react';
import Context from '../../Context';
import { useParams, Link, useLocation } from 'react-router-dom';
import './Author.scss';
// import { AuthorCard } from '../../components/AuthorCard/AuthorCard';

export const Author = () => {
    const { api, user, content } = useContext(Context);
    const { id } = useParams();
    const { email } = user;
    let display = null;

    display = content.filter(el => el.userEmail === id).map(el => {
        // console.log(el)
        const { linkImage, title } = el;

        return (
            <Link
                to={`/about/${el._id}`}
                key={el._id}
                className='author-page__content'
            >
                <div className='author-page__content-box'>
                    <h1>{title}</h1>
                    <img src={linkImage} alt={title} />
                </div>
            </Link>

        )
    }
    )


    return (
        <div className='author-page'>{display}</div>
    )
}

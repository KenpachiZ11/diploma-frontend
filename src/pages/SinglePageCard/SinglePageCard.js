import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './SinglePageCard.scss';
import Context from '../../Context';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';

export const SinglePageCard = () => {
    const {api, user, content, authors} = useContext(Context);
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);
    const [info, setInfo] = useState('Заказать работу');
    const [active, setActive] = useState(false);
    // const [data, setData] = useState(content);
    // const location = useLocation();

    // const linkId = data.filter(el => json.filter(d => d.userEmail === el.email).length)

    useEffect(() => {
        api.singlePage(id)
        .then(res => setNewPostData(res))
    }, [id]);

    const { title, description, author, linkImage, userEmail } = newPostData;

    useEffect(() => {
        setInfo(info);
    }, [info]);

    // useEffect(() => {
    //     setActive(active => !active);
    // }, []);

    return (
        <>
            {
                newPostData 
                ?
                <div className='single-page'>
                    <div className='single-page__image'>
                        <img 
                            src={linkImage} 
                            alt={title} 
                            className='single-page__image-img'
                        />
                    </div>
                    <div className='single-page__card'>
                        <div className='single-page__card-title'>{title}</div>
                        <div className='single-page__card-description'>{description}</div>
                        <div className='single-page__card-author'>Автор: 
                            <Link 
                                to={`/author/${userEmail}`} 
                                content={content}
                                // state={{data: data}}
                            >
                                {author}
                            </Link> </div>
                    </div>
                    {
                        user.status === 'user' &&
                            <div className='single-page__button'>
                                <Button 
                                    info={info} 
                                    setActive={setActive}
                                />
                            </div> 
                    }
                    {
                        active ? 
                            <Modal 
                                newPostData={newPostData} 
                                active={active} 
                                setActive={setActive}
                            /> : ''
                    }
                </div>
                :
                <h1>404 not found</h1>
            }
        </>
    )
}

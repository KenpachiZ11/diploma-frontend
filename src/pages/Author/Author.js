import React, { useState, useEffect, useContext} from 'react';
import Context from '../../Context';
import { useParams, Link, useLocation } from 'react-router-dom';
import './Author.scss';
// import { AuthorCard } from '../../components/AuthorCard/AuthorCard';

export const Author = () => {
    const { api, user, content, authors } = useContext(Context);
    console.log(authors)
    const { id } = useParams();
    const { email } = user;
    let display = null;
    // const location = useLocation();
    // const [data, setData] = useState([]);
    // const data = location.state?.data;
    // console.log(data)
    // console.log(location)

    // useEffect(() => {
    //     api.authorId(id, content)
    //         .then(data => setData(data));
    // }, [id]);
    // console.log(data)
    // console.log(user)
    // if(user.email) {
    //     content.map(el => {
    //         console.log(el.userEmail === user.email)
    //     });
    // }
    // console.log(content)
    // console.log(id)
    
    // display = user.map(el => {
    //     if(el.userEmail === email) {
    //         console.log(content)
    //     }
    // });

    // display = content.map(el => {
    //     if(el.userEmail === email) {
    //         console.log(el)
    //         const { linkImage, title } = el;

    //         console.log(content)
    //         return(
    //             <div
    //                 // to={`/about/${content.id}`}
    //                 key={el._id} 
    //                 className='author-page__content'
    //             >
    //                 <div className='author-page__content-box'>
    //                     <h1>{title}</h1>
    //                     <img src={linkImage} alt={title} />
    //                 </div>
    //             </div>

    //         )
    //     }
    // })


    return (
        <div className='author-page'>{display}</div>
    )
}

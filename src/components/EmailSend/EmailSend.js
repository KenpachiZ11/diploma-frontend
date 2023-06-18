import React, { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../Context';
import './EmailSend.scss';

const EmailSend = (props) => {
    const { api, user } = useContext(Context);
    const { id } = useParams();
    const { title, description, author, linkImage } = props.newPostData;

    const [msg, setMsg] = useState('');
    const [users, setUser] = useState({
        to: '',
        subject: '',
        text: { title, description, author, linkImage }
    });

    const { to, subject} = users;
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        api.emailSend(id, users)
            .then(res => setMsg(res.users))
    
            console.log(users, 'users')
            console.log(msg, 'msg')
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <form className='email-send' onClick={onSubmit}>
            <label>
                <input
                    type='text'
                    placeholder='Email'
                    name='to'
                    onChange={onInputChange}
                    value={to}
                />
            </label>

            <label>
                <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    onChange={onInputChange}
                    value={subject}
                />
            </label>

            <input type="submit" value='Отправить' id='btn'/>
            
        </form>
    );
};

export default EmailSend;
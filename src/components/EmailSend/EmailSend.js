import React, { useState, useEffect } from 'react';
import './EmailSend.scss';

const EmailSend = (props) => {
    const { title, description, author, linkImage } = props.newPostData;

    const [msg, setMsg] = useState('');
    const [user, setUser] = useState({
        to: '',
        subject: '',
        text: { title, description, author, linkImage }
    });

    const { to, subject} = user;
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        fetch('/id', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json, text/plain, */*',
                // 'Content-type': 'text/plain'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                setMsg(res.user)
            })
    
            console.log(user, 'user')
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

            <input type="submit" value='Отправить'/>
            
        </form>
    );
};

export default EmailSend;
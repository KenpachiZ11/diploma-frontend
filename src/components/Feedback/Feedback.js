import React, { useState, useEffect, useRef, useContext } from 'react';
import './Feedback.scss';
import Context from '../../Context';

export const Feedback = () => {
    const {api} = useContext(Context);
    const form = useRef(null);
    const [message, setMessage] = useState([]);
    const [inputs, setInputs] = useState({
        name: null,
        email: null,
        phone: null,
        sms: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, sms } = inputs;

        if(!name || !email || !phone || !sms) {
            alert('Поля не могут быть путыми');
            return false;
        }

        api.contactsAdd({ name, email, phone, sms })
        .then(json => setInputs(json.inputs))
    }

    const handleChange = (e) => {
        // console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState  => ({...prevState, [name]: value}));
    };
    
    return (
        <div className='feedback-wrapper'>

            <div className='feedback-wrapper__left'>
                <div>Расположение офиса: Костомаровский переулок, 3с4</div>
                <div>Телефон для связи: +7 (499) 350-66-04</div>
                <div>Наша почта: info@ithub.ru</div>
            </div>

            <div className='feedback-wrapper__right'>
                <form ref={form} onSubmit={handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            placeholder='Ваше имя'
                            name="name" 
                            value={inputs.name || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            placeholder='Введите email'
                            name="email" 
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            placeholder='Введите телефон'
                            name="phone" 
                            value={inputs.phone || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <textarea
                            type="text" 
                            placeholder='Сообщение'
                            name="sms" 
                            value={inputs.sms || ''}
                            onChange={handleChange}
                        />
                    </label>
                    {/* {message} */}

                <div>
                    <input type="submit" value='Отправить'/>
                </div>
                </form>
            </div>

        </div>
    )
}

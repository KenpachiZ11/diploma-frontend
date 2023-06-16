import React, { useState, useEffect, useRef } from 'react';
import './FormCard.scss';

export const FormCard = () => {
    const form = useRef(null);
    const [message, setMessage] = useState([]);
    const [inputs, setInputs] = useState({
        author: null,
        title: null,
        description: null,
        linkImage: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { author, title, description, linkImage } = inputs;

        if(!author || !title || !description || !linkImage) {
            alert('Поля не могут быть путыми');
            return false;
        }

        fetch('https://danya.pewiwe.ru/form', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json, text/plain, */*',
                // 'Content-type': 'text/plain'
            },
            body: JSON.stringify({ author, title, description, linkImage })     
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setInputs(json.inputs)
        })
        console.log(inputs)

        setInputs('');
    }

    const handleChange = (e) => {
        // console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState  => ({...prevState, [name]: value}));
    };

    useEffect(() => {
        fetch('/form')
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    console.log(message)

    return (
        <div className='form-page'>
            <form ref={form} onSubmit={handleSubmit}>
            <label>
                {/* <h4>author</h4> */}
                <input 
                    type="text" 
                    placeholder='author'
                    name="author"
                    value={inputs.author || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                {/* <h4>title</h4> */}
                <input 
                    type="text" 
                    placeholder='title'
                    name="title" 
                    value={inputs.title || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                {/* <h4>description</h4> */}
                <textarea 
                    type="text" 
                    placeholder='description'
                    name="description" 
                    value={inputs.description || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                {/* <h4>link image</h4> */}
                <input 
                    type="text" 
                    placeholder='linkImage'
                    name="linkImage" 
                    value={inputs.linkImage || ''}
                    onChange={handleChange}
                />
            </label>

            <div>
                <input type="submit" value='Отправить'/>
            </div>

            </form>
        </div>
    )
}
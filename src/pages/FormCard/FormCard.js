import React, { useState, useEffect, useRef, useContext } from 'react';
import Context from '../../Context';
import './FormCard.scss';

export const FormCard = () => {
    const {api} = useContext(Context);
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

        api.formCard({author, title, description, linkImage})
            .then(json => setInputs(json.inputs))

        setInputs('');
    }

    const handleChange = (e) => {
        // console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState  => ({...prevState, [name]: value}));
    };

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
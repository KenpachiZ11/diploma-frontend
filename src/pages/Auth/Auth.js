import React, { useState, useEffect } from 'react';
import './Auth.scss';

export const Auth = () => {
    const [auth, setAuth] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [testPwd, setTestPwd] = useState('');

	// const [message, setMessage] = useState([]);
	// useEffect(() => {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(data => setMessage(data.message));
    // }, []);
	// console.log(message)

    const sendForm = (e) => {
        e.preventDefault();
        let body = { email, password: pwd };

        if(!auth) {
            body.name = name;

			fetch('/users', {
				'method': 'POST',
				'headers': {
					'Content-Type': 'application/json',
					// 'Accept': 'application/json, text/plain, */*',
					// 'Content-type': 'text/plain'
				},
				body: JSON.stringify({ name, email, password: pwd })     
			})
			.then(res => res.json())
			.then(json => {
				setName(json.inputs)
				setEmail(json.inputs)
				setPwd(json.inputs)
			})

			// setTimeout(() => {
			// 	clearForm();
			// }, 1000);
        }
        console.log(body);
    }

    const switchAuth = (e) => {
        e.preventDefault();
        setAuth(!auth);
		clearForm();
    }

	const clearForm = () => {
		setName('');
		setEmail('');
		setPwd('');
		setTestPwd('');
	}

    return (
        <form onSubmit={sendForm} className='auth-form'>
				{!auth && 
                <label>
					{/* Имя пользователя */}
					<input 
                        placeholder='Имя пользователя'
						type="text" 
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				</label>}
				<label>
					{/* Электронный адрес */}
					<input 
                        placeholder='Электронный адрес'
						type="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					{/* Пароль */}
					<input 
                        placeholder='Пароль'
						type="password" 
						value={pwd} 
						onChange={(e) => setPwd(e.target.value)}
					/>
				</label>
				{!auth && <label>
					{/* Повторить пароль */}
					<input 
                        placeholder='Повторить пароль'
						type="password" 
						value={testPwd} 
						onChange={(e) => setTestPwd(e.target.value)}
						// style={testAccess}
						// style={{border: "1px solid", backgroundColor: "blueviolet"}}
					/>
				</label>}
				<div className="auth-form__btns">
					<button 
						// className="modal-btn"
						// Если кнопка формы регистрации, то проверяем наличие соответствия паролей, но они не должы быть пустыми
						disabled={!auth && (!pwd || pwd !== testPwd)}
					>
						{auth ? "Войти" : "Создать аккаунт" }
					</button>
					<button 
						// href=''
						// className="modal-link"
						onClick={switchAuth}
					>
						{auth ? "Регистрация" : "Войти"}
					</button>
				</div>
			</form>
    )
}

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context';
import './Auth.scss';

export const Auth = () => {
	const { api, setUser } = useContext(Context);
	const nav = useNavigate();

	const [auth, setAuth] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [testPwd, setTestPwd] = useState('');

	const sendForm = (e) => {
		e.preventDefault();
		let body = { email, password: pwd };

		if (!auth) {
			body.name = name;

			api.addUser({ name, email, password: pwd })
				.then(json => {
					if (json) {
						if (json.message) {
							alert(json.message)
						} else {
							setUser(json)
							localStorage.setItem("user", JSON.stringify(json))
							nav('/');
						}
					} else {
						alert("Что-то пошло не так")
					}
				})
		} else {
			api.auth(body)
				.then(json => {
					if(json) {
						if (json.message) {
							alert(json.message)
						} else {
							setUser(json)
							localStorage.setItem("user", JSON.stringify(json))
							nav('/person')
						}
					} else {
						alert("Такого пользователя не существует");
					}
				})
		}
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
						value={name || ''}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>}
			<label>
				{/* Электронный адрес */}
				<input
					placeholder='Электронный адрес'
					type="email"
					value={email || ''}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label>
				{/* Пароль */}
				<input
					placeholder='Пароль'
					type="password"
					value={pwd || ''}
					onChange={(e) => setPwd(e.target.value)}
				/>
			</label>
			{!auth && <label>
				{/* Повторить пароль */}
				<input
					placeholder='Повторить пароль'
					type="password"
					value={testPwd || ''}
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
					{auth ? "Войти" : "Создать аккаунт"}
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

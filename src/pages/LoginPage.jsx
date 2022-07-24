import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const {
        userSetters: {
            setUserEmail,
            setUserPassword,
        },
    } = useContext(AppContext);

    const setNewState = () => {
        setUserEmail(email);
        setUserPassword(password);
    }

    useEffect(() => {
        const enableButton = () => {
            /* Source: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail */
            const verifyEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z][a-z][a-z]+(\.[a-z]+)?$/i;
            const MIN_CHARACTERES = 5;
        
            if (verifyEmail.test(email) && password.length >= MIN_CHARACTERES) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        };
    
        enableButton();
    }, [email, password]);

    return (
        <main className="login-container">

            <section className="login-components">
                <h1>Login</h1>
            
                <div className="login-inputs">

                    <div id="first-login-input">
                        <ion-icon name="person-sharp" />
                        <input
                            type="email"
                            name="input-email"
                            placeholder="Email"
                            onChange={ ({ target: { value } }) => setEmail(value) }
                        />
                    </div>

                    <div id="second-login-input">
                    <ion-icon name="lock-closed" />
                    <input
                        type="password"
                        name="input-password"
                        placeholder="Senha (Minimo 5 caracteres)"
                        onChange={ ({ target: { value } }) => setPassword(value) }
                    />
                    </div>
                </div>

                <Link to="/stocklist">
                    <button
                        type="button"
                        name="login-button"
                        disabled={ isDisabled }
                        onClick={ setNewState }
                    >
                        Acessar
                    </button>
                </Link>
            </section>
        </main>
    );
};

export default LoginPage;
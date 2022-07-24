import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import { saveInStorage } from '../utils/localStorage';

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

    const setNewStateAndSaveUserDataOnStorage = () => {
        /* Source: https://bobbyhadz.com/blog/javascript-get-name-from-email-address#:~:text=To%20extract%20the%20name%20from,%40')%5B0%5D%20. */
        const userEmail = email.split('@')[0];
        /* Source: https://flexiple.com/javascript-capitalize-first-letter/ */
        const userEmailWithUpperLetter = userEmail.charAt(0).toUpperCase() + userEmail.slice(1);

        const dateAccess = new Date();
        const hourAccess = new Date().getHours();
        const minuteAccess = new Date().getMinutes();
        const secondAccess = new Date().getSeconds();

        setUserEmail(email);
        setUserPassword(password);

        saveInStorage('userName', userEmailWithUpperLetter);
        saveInStorage('userEmail', email);
        saveInStorage('dateAccess', dateAccess);
        saveInStorage('hourAccess', hourAccess);
        saveInStorage('minuteAccess', minuteAccess);
        saveInStorage('secondAccess', secondAccess);
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
                        onClick={ setNewStateAndSaveUserDataOnStorage }
                    >
                        Acessar
                    </button>
                </Link>
            </section>
        </main>
    );
};

export default LoginPage;
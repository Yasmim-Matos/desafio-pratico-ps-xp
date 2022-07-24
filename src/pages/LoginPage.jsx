import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                            placeholder="Insira seu email aqui"
                            onChange={ ({ target: { value } }) => setEmail(value) }
                        />
                    </div>

                    <div id="second-login-input">
                    <ion-icon name="lock-closed" />
                    <input
                        type="password"
                        name="input-password"
                        placeholder="Insira sua senha aqui"
                        onChange={ ({ target: { value } }) => setPassword(value) }
                    />
                    </div>
                </div>

                <Link to="/stocklist">
                    <button
                        type="button"
                        name="login-button"
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
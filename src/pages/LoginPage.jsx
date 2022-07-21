import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        setters: {
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
            <h1>Login</h1>
        
            <div className="login-inputs">
                <input
                    type="email"
                    name="input-email"
                    placeholder="Insira seu email aqui"
                    onChange={ ({ target: { value } }) => setEmail(value) }
                />

                <input
                    type="password"
                    name="input-password"
                    placeholder="Insira sua senha aqui"
                    onChange={ ({ target: { value } }) => setPassword(value) }
                />
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
        </main>
    );
};

export default LoginPage;
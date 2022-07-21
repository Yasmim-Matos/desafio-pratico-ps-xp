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

    return (
        <main className="login-container">
            <h1>Login</h1>
        
            <div className="login-inputs">
                <input
                    type="email"
                    name="input-email"
                    placeholder="Insira seu email aqui"
                />

                <input
                    type="password"
                    name="input-password"
                    placeholder="Insira sua senha aqui"
                />
            </div>

            <Link to="/stocklist">
                <button
                    type="button"
                    name="login-button"
                >
                    Acessar
                </button>
            </Link>
        </main>
    );
};

export default LoginPage;
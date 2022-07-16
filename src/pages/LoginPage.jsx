import React from 'react';

function LoginPage() {
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

            <button
                type="button"
                name="login-button"
            >
                Enter
            </button>
        </main>
    );
};

export default LoginPage;
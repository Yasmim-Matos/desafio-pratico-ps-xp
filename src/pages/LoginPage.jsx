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
            </div>
        </main>
    );
};

export default LoginPage;
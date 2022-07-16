import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header-container">
            <p>
                Saldo:
                {' '}
                <span className="balance">Saldo Total</span>
            </p>

            <p>
                Total de ações:
                {' '}
                <span className="stocks">Número de ações</span>
            </p>

            <p>
                Usuário:
                {' '}
                <span className="username">Nome</span>
            </p>
        </header>
    );
};

export default Header;

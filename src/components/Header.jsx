import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
    const { userData: { userEmail } } = useContext(AppContext);

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
                Olá,
                {' '}
                <span
                    className="username"
                >
                        { userEmail }
                </span>
            </p>
        </header>
    );
};

export default Header;

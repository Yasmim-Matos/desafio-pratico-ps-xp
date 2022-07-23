import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
    const {
        userData: {
            userEmail,
            userBalance,
        },
        userStockData: {
            userStocks,
        },
    } = useContext(AppContext);

    return (
        <header className="header-container">
            <p>
                Saldo:
                {' '}
                <span className="balance">{ userBalance }</span>
            </p>

            <p>
                Total de ações:
                {' '}
                <span className="stocks">{ userStocks[1] }</span>
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

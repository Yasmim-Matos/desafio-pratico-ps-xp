import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { getInStorage } from '../utils/localStorage';

import '../styles/Header.css';

function Header() {
    const {
        userData: {
            userBalance,
        },
    } = useContext(AppContext);

    return (
        <header className="header-container">
            <p>
                Saldo: R$
                {' '}
                <span
                    className="balance"
                >
                    { userBalance }
                </span>
            </p>

            <p>
                Olá,
                {' '}
                <span
                    className="username"
                >
                        { getInStorage('userName') }
                </span>
            </p>
        </header>
    );
};

export default Header;

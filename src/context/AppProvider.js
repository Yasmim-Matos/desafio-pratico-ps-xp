import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [userBalance, setUserBalance] = useState(0);
    const [userStock, setUserStock] = useState(0);

    const contextValue = {
        setters: {
            setUserEmail,
            setUserPassword,
            setUserBalance,
            setUserStock,
        },
        userData: {
            userEmail,
            userPassword,
            userBalance,
            userStock,
        },
    };

    return (
        <AppContext.Provider value={ contextValue }>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
    ]),
}.isRequired;

export default AppProvider;

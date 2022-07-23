import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [userBalance, setUserBalance] = useState(0);

    const [userStockName, setUserStockName] = useState([]);
    const [userStocksBought, setUserStocksBought] = useState([]);
    const [userAmountPaid, setUserAmountPaid] = useState([]);

    const [availableStockName, setAvailableStockName] = useState([]);
    const [availableStocksQuantity, setAvailableStocksQuantity] = useState([]);
    const [unitStockValue, setUnitStockValue] = useState([]);
    const [lotStockValue, setLotStockValue] = useState([]);

    const [stockInProgress, setStockInProgress] = useState([]);

    const contextValue = {
        userSetters: {
            setUserEmail,
            setUserPassword,
            setUserBalance,
        },
        userData: {
            userEmail,
            userPassword,
            userBalance,
        },

        userStockSetters: {
            setUserStockName,
            setUserStocksBought,
            setUserAmountPaid,
        },
        userStockData: {
            userStockName,
            userStocksBought,
            userAmountPaid,
        },

        availableStocksSetters: {
            setAvailableStockName,
            setAvailableStocksQuantity,
            setUnitStockValue,
            setLotStockValue,
        },
        availableStocksData: {
            availableStockName,
            availableStocksQuantity,
            unitStockValue,
            lotStockValue,
        },

        setStockInProgress,
        stockInProgress,
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

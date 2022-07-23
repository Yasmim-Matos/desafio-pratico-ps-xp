import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

import AvailableStocksToInvest from '../utils/AvailableStocksToInvest';
import StocksOfUser from '../utils/StocksOfUser';

function AppProvider({ children }) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [userBalance, setUserBalance] = useState(0);

    const [userStocks, setUserStocks] = useState([StocksOfUser]);
    const [availableStocks, setAvailableStocks] = useState([AvailableStocksToInvest]);

    const [stockInProgress, setStockInProgress] = useState([]);
    const [typeOfStock, setTypeOfStock] = useState(0);

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
            setUserStocks,
        },
        userStockData: {
            userStocks,
        },

        availableStocksSetters: {
            setAvailableStocks,
        },
        availableStocksData: {
            availableStocks,
        },

        setStockInProgress,
        stockInProgress,

        typeOfStock, 
        setTypeOfStock,
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

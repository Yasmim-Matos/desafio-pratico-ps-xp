import React from 'react';
import Header from '../components/Header';

import { Link } from 'react-router-dom';
import UserStocksTable from '../components/UserStocksTable';
import StocksAvailableToInvestTable from '../components/StocksAvailableToInvestTable';

function StockListPage() {
    return (
        <main className="stock-list-container">
            <Header />
            <h1>Stock List</h1>

            <UserStocksTable />

            <StocksAvailableToInvestTable />

            <Link to='/depositandwithdrawal'>
                <button
                    type="button"
                    name="stock-list-button"
                >
                    Depósito/Retirada
                </button>
            </Link>
        </main>
    );
}

export default StockListPage;

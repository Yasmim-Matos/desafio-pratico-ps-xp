import React from 'react';
import Header from '../components/Header';

import { Link } from 'react-router-dom';
import UserStocks from '../components/UserStocks';

function StockListPage() {
    return (
        <main className="stock-list-container">
            <Header />
            <h1>Stock List</h1>

            <UserStocks />

            <h3>Disponíveis para investir</h3>

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

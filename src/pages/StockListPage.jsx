import React from 'react';
import Header from '../components/Header';

import { Link } from 'react-router-dom';

function StockListPage() {
    return (
        <main className="stock-list-container">
            <Header />
            <h1>Stock List</h1>

            <h3>Minhas ações</h3>

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

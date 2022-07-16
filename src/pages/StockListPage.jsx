import React from 'react';
import Header from '../components/Header';

function StockListPage() {
    return (
        <main className="stock-list-container">
            <Header />
            <h1>Stock List</h1>

            <button
                type="button"
                name="stock-list-button"
            >
                Depósito/Retirada
            </button>
        </main>
    );
}

export default StockListPage;

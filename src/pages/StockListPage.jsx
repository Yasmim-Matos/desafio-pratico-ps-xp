import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import UserStocksTable from '../components/UserStocksTable';
import AvailableStocksToInvestTable from '../components/AvailableStocksToInvestTable';

import '../styles/StockListPage.css';

function StockListPage() {
    return (
        <main>
            <Header />

            <section className="stock-list-container">
                <h1>Stock List</h1>

                <div className="user-stocks-container">
                    <h3>Minhas ações</h3>

                    <UserStocksTable />
                </div>

                <div className="stocks-available-table-container">
                    <h3>Disponíveis para investir</h3>

                    <AvailableStocksToInvestTable />
                </div>


                <Link to='/depositandwithdrawal'>
                    <button
                        type="button"
                        name="stock-list-button"
                    >
                        Depósito/Retirada
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default StockListPage;

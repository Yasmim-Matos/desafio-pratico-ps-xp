import React from 'react';
import StocksBoughtData from '../utils/StocksBoughtData';

function UserStocks() {
    return (
        <main className="user-stocks-container">
            <h3>Minhas ações</h3>

            <StocksBoughtData />
        </main>
    );
}

export default UserStocks;

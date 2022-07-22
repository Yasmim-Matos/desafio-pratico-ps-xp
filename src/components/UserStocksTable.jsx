import React from 'react';
import UserStocksData from '../utils/UserStocksData';

function UserStocks() {
    return (
        <main className="user-stocks-container">
            <h3>Minhas ações</h3>

            <UserStocksData />
        </main>
    );
}

export default UserStocks;

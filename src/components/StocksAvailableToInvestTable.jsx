import React from 'react';
import AvailableStocksToInvestData from '../utils/AvailableStocksToInvestData';

function AvailableStocksToInvestTable() {
    return (
        <main className="stocks-available-container">
            <h3>Disponíveis para investir</h3>

            <AvailableStocksToInvestData />
        </main>
    );
}

export default AvailableStocksToInvestTable;

import React from 'react';
import Header from '../components/Header';

function DepositAndWithdrawalPage() {
    return (
        <main className="depositAndWithdrawal-container">
            <Header />
            <h1>Deposit And Withdrawal</h1>

            <button
                type="button"
                name="depoAndWithD-button"
            >
                Depósito/Retirada
            </button>
        </main>
    );
}

export default DepositAndWithdrawalPage;

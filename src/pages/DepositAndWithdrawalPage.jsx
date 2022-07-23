import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

function DepositAndWithdrawalPage() {
    const [value, setNewValue] = useState(0);
    const {
        userData: {
            userBalance,
        },
    } = useContext(AppContext);

    return (
        <main className="deposit-withdrawal-container">
            <Header />
            <h1>Deposit And Withdrawal</h1>

            <p>
                Saldo:
                {' '}
                <span className="balance">{ userBalance }</span>
            </p>

            <input type="number" value={ value }/>


            <button
                type="button"
            >
                Depósito
            </button>

            <button
                type="button"
            >
                Retirada
            </button>
        </main>
    );
}

export default DepositAndWithdrawalPage;
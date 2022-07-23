import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

function DepositAndWithdrawalPage() {
    const [inputValue, setNewValue] = useState(0);
    const {
        userData: {
            userBalance,
        },
        userSetters: {
            setUserBalance,
        },
    } = useContext(AppContext);



    const decreaseBalance = () => {
        const value = Number(inputValue);
        const balance =  userBalance;

        if (balance <= 0 || balance < value) return alert('Saldo Insuficiente');

        if (balance > 0) { 
            const totalBalance = balance - value;

            setUserBalance(totalBalance);
            return alert('Dinheiro Retirado com Sucesso');
        }
    }

    return (
        <main className="deposit-withdrawal-container">
            <Header />
            <h1>Deposit And Withdrawal</h1>

            <p>
                Saldo em Conta:
                {' '}
                <span className="balance">{ userBalance }</span>
            </p>

            <input
                type="number"
                onChange={ ({ target: { value } }) => setNewValue(value) }
            />


            <button
                type="button"
            >
                Depósito
            </button>

            <button
                type="button"
                onClick={ decreaseBalance }
            >
                Retirada
            </button>
        </main>
    );
}

export default DepositAndWithdrawalPage;
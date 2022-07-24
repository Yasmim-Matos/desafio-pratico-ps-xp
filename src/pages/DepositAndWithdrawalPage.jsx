import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

import AppContext from '../context/AppContext';
import Header from '../components/Header';

import '../styles/DepositAndWithdrawalPage.css';

function DepositAndWithdrawalPage() {
    const [inputValue, setNewValue] = useState(0);
    const history = useHistory();

    const {
        userData: {
            userBalance,
        },
        userSetters: {
            setUserBalance,
        },
    } = useContext(AppContext);

    const increaseBalance = () => {
        const value = Number(inputValue);
        const balance =  Number(userBalance);

        if (value === 0) return alert('Nenhum Valor foi Informado');

        const totalBalance = balance + value;

        setUserBalance(totalBalance);
        return alert('Dinheiro Depositado com Sucesso');
    }

    const decreaseBalance = () => {
        const value = Number(inputValue);
        const balance =  Number(userBalance);

        if (value === 0) return alert('Nenhum Valor foi Informado');
        
        if (balance <= 0 || balance < value) return alert('Saldo Insuficiente');

        if (balance > 0) { 
            const totalBalance = balance - value;

            setUserBalance(totalBalance);
            return alert('Dinheiro Retirado com Sucesso');
        }
    }

    return (
        <main>
            <Header />

            <section className="deposit-withdrawal-container">

                <h1>Deposit And Withdrawal</h1>

                <p>
                    Saldo em Conta: R$
                    {' '}
                    <span className="balance">{ userBalance }</span>
                </p>

                <input
                    type="number"
                    placeholder="Informe o valor"
                    onChange={ ({ target: { value } }) => setNewValue(value) }
                />

                <div className="dep-and-withdrawal-buttons">
                    <button
                        type="button"
                        onClick={ increaseBalance }
                    >
                        Depósito
                    </button>

                    <button
                        type="button"
                        onClick={ decreaseBalance }
                    >
                        Retirada
                    </button>

                    <button
                        type="button"
                        onClick={ () => history.goBack() }
                    >
                        Voltar
                    </button>
                </div>
            </section>
        </main>
    );
}

export default DepositAndWithdrawalPage;
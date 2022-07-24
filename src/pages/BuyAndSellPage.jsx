import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import AppContext from '../context/AppContext';

import UserStocksData from '../utils/UserStocksData';
import AvailableStocksToInvestData from '../utils/AvailableStocksToInvestData';

function BuyAndSellPage() {
    const [inputValue, setNewValue] = useState(0);

    const {
        userData: {
            userBalance,
        },
        userSetters: {
            setUserBalance,
        },

        userStockSetters: {
            setUserStocks,
        },
        userStockData: {
            userStocks,
        },

        availableStocksSetters: {
            setAvailableStocks,
        },

        typeOfStock,
        stockInProgress,

        setStockInProgress,
    } = useContext(AppContext);



    const buyStock = () => {
        const iptValue = Number(inputValue);
        const balance =  Number(userBalance);
        const paidValue = Number(stockInProgress[2]);
        const stock = stockInProgress[0];

        if (iptValue === 0) return alert('Nenhum Valor foi Informado');

        if (balance <= 0) return alert('Saldo Insuficiente');

        if (iptValue < paidValue) return alert('O valor digitado não é o mesmo que o valor do lote');

        if (balance >= iptValue && iptValue === paidValue) {
            const correctStockIndex = AvailableStocksToInvestData.findIndex(
                ({stockName}) => stockName === stock
            );
    
            const totalBalance = balance - iptValue;
            const addingStock = UserStocksData.push(AvailableStocksToInvestData[correctStockIndex]);
            const removeStock = AvailableStocksToInvestData.splice(correctStockIndex, 1);

            setUserBalance(totalBalance);
            setAvailableStocks(removeStock);
            setUserStocks([...userStocks, addingStock]);
            setStockInProgress([]);
            return alert('Compra efetuada com sucesso');
        }
    }

    const sellStock = () => {
        const iptValue = Number(inputValue);
        const balance =  Number(userBalance);
        const paidValue = Number(stockInProgress[2]);
        const stock = stockInProgress[0];

        if (iptValue === 0) return alert('Nenhum Valor foi Informado');

        if (iptValue < paidValue) return alert('O valor que foi pago pela ação precisa ser o mesmo que o digitado');

        if (iptValue === paidValue) {
            const correctStockIndex = UserStocksData.findIndex(
                ({stockName}) => stockName === stock
            );

            if (correctStockIndex === (-1)) return alert('A ação não foi comprada, então não pode ser vendida');
    
            const totalBalance = balance + iptValue;
            const addingStock = AvailableStocksToInvestData.push(UserStocksData[correctStockIndex]);
            const removeStock = UserStocksData.splice(correctStockIndex, 1);

            setUserBalance(totalBalance);
            setAvailableStocks([...userStocks, addingStock]);
            setUserStocks(removeStock);
            setStockInProgress([]);
            return alert('Venda efetuada com sucesso');
        }
    }

    return (
        <main className="buy-and-sell-container">
            <Header />
            <h1>Buy And Sell</h1>

            { typeOfStock === 1
                ? 
                <table>
                    <thead>
                        <tr>
                            <th>Nome da Ação</th>
                            <th>Quantidade</th>
                            <th>Valor do Lote (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={ stockInProgress[0] }>
                                <td>{ stockInProgress[0] }</td>
                                <td>{ stockInProgress[1] }</td>
                                <td>{ stockInProgress[2] }</td>
                            </tr>
                    </tbody>
                </table>
                :
                <table>
                        <thead>
                            <tr>
                            <th>Nome da Ação</th>
                            <th>Quantidade</th>
                            <th>Valor Pago (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={ stockInProgress[0] }>
                                <td>{ stockInProgress[0] }</td>
                                <td>{ stockInProgress[1] }</td>
                                <td>{ stockInProgress[2] }</td>
                            </tr>
                        </tbody>
                </table>
            }
            
            <button
                type="button"
                name="buy-button"
                onClick={ buyStock }
            >
                Comprar
            </button>

            <input
                type="number"
                placeholder="Informe o valor para Compra"
                onChange={ ({ target: { value } }) => setNewValue(value) }
            />

            <button
                type="button"
                name="sell-button"
                onClick={ sellStock }
            >
                Vender
            </button>

            <input
            type="number"
            placeholder="Informe o Valor para Venda"
            onChange={ ({ target: { value } }) => setNewValue(value) }
            />

            <Link to="/stocklist">
                <button
                    type="button"
                >
                    Voltar
                </button>
            </Link>

            <button
                type="button"
            >
                Confirmar
            </button>

            <Link to="/depositandwithdrawal">
                <button
                    type="button"
                >
                    Depósito/Retirada
                </button>
            </Link>
        </main>
    );
}

export default BuyAndSellPage;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function UserStocksData() {
    const {
        userStockSetters: {
            setUserStockName,
            setUserStocksBought,
            setUserAmountPaid,
        },
        userStockData: {
            userStockName,
            userStocksBought,
            userAmountPaid,
        },

        setTypeOfStock,
        setStockInProgress,
    } = useContext(AppContext);

    const allStocksBought = [
        {
            stockName: 'XP1',
            qtdBought: 1,
            amountPaid: 10,
        },
        {
            stockName: 'XP2',
            qtdBought: 12,
            amountPaid: 14,
        },
    ];

    const setNewStateForStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = allStocksBought.findIndex(
            ({stockName}) => stockName === correctStockName
        );

        const name = allStocksBought[correctStockIndex].stockName;
        const qtdStock = allStocksBought[correctStockIndex].qtdBought;
        const amountPaid = allStocksBought[correctStockIndex].amountPaid;

        setUserStockName([...userStockName, name]);
        setUserStocksBought([...userStocksBought, qtdStock]);
        setUserAmountPaid([...userAmountPaid, amountPaid]);

        setStockInProgress([name, qtdStock, amountPaid]);
        setTypeOfStock(2);
    }

    return (
        <>
            { allStocksBought.length === 0
                    ? <p>Você não tem nenhuma ação comprada</p> 
                    :
                        <table>
                            <thead>
                                <tr>
                                <th>Nome da Ação</th>
                                <th>Quantidade</th>
                                <th>Valor Pago (R$)</th>
                                <th>Negociar</th>
                                </tr>
                            </thead>

                            <tbody>
                            { allStocksBought.map(({ stockName, qtdBought, amountPaid }) => {
                                    return (
                                        <tr key={ stockName }>
                                            <td>{ stockName }</td>
                                            <td>{ qtdBought }</td>
                                            <td>{ amountPaid }</td>

                                            <td>
                                                <Link to="/buyandsell">
                                                    <button
                                                        type="button"
                                                        name="buy-button"
                                                        className={ stockName }
                                                        onClick={ (target) => setNewStateForStocks(target) }
                                                    >
                                                        C
                                                    </button>
                                                </Link>

                                                <Link to="/buyandsell">
                                                    <button
                                                        type="button"
                                                        name="sell-button"
                                                        className={ stockName }
                                                        onClick={ (target) => setNewStateForStocks(target) }
                                                    >
                                                        V
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
            }
        </>
    )
}

export default UserStocksData;

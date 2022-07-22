import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function StocksBoughtData() {
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
    } = useContext(AppContext);

    const allStocksBought = [
        {
            stockName: 'XP',
            qtdBought: 1,
            amountPaid: 10,
        },
        {
            stockName: 'XP1',
            qtdBought: 12,
            amountPaid: 14,
        },
    ];

    const setNewStateForStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = allStocksBought.findIndex(({stockName}) => stockName === correctStockName);

        setUserStockName([...userStockName, allStocksBought[correctStockIndex].stockName]);
        setUserStocksBought([...userStocksBought, allStocksBought[correctStockIndex].qtdBought]);
        setUserAmountPaid([...userAmountPaid, allStocksBought[correctStockIndex].amountPaid]);
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
                                                <button
                                                    type="button"
                                                    name="buy-button"
                                                    className={ stockName }
                                                    onClick={ (target) => setNewStateForStocks(target) }
                                                >
                                                    C
                                                </button>

                                                <button
                                                    type="button"
                                                    name="sell-button"
                                                    className={ stockName }
                                                    onClick={ (target) => setNewStateForStocks(target) }
                                                >
                                                    V
                                                </button>
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
export default StocksBoughtData;

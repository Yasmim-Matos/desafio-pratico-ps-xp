import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import UserStocksData from '../utils/UserStocksData';

function UserStocksTable() {
    const {
        setTypeOfStock,
        setStockInProgress,
    } = useContext(AppContext);

    const setNewStateForStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = UserStocksData.findIndex(
            ({stockName}) => stockName === correctStockName
        );

        const name = UserStocksData[correctStockIndex].stockName;
        const qtdAvailable = UserStocksData[correctStockIndex].qtdAvailable;
        const lotValue = UserStocksData[correctStockIndex].lotValue;

        setStockInProgress([name, qtdAvailable, lotValue]);
        setTypeOfStock(2);
    }

    return (
        <>
            { UserStocksData.length === 0
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
                            { UserStocksData.map(({ stockName, qtdAvailable, lotValue}) => {
                                    return (
                                        <tr key={ stockName }>
                                            <td>{ stockName }</td>
                                            <td>{ qtdAvailable }</td>
                                            <td>{ lotValue }</td>

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

export default UserStocksTable;

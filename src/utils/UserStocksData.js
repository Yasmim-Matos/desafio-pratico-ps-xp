import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import StocksOfUser from './StocksOfUser';

function UserStocksData() {
    const {
        setTypeOfStock,
        setStockInProgress,
    } = useContext(AppContext);

    const setNewStateForStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = StocksOfUser.findIndex(
            ({stockName}) => stockName === correctStockName
        );

        const name = StocksOfUser[correctStockIndex].stockName;
        const qtdAvailable = StocksOfUser[correctStockIndex].qtdAvailable;
        const lotValue = StocksOfUser[correctStockIndex].lotValue;

        /* setUserStockName([...userStockName, name]);
        setUserStocksBought([...userStocksBought, qtdAvailable]);
        setUserAmountPaid([...userAmountPaid, lotValue]); */

        setStockInProgress([name, qtdAvailable, lotValue]);
        setTypeOfStock(2);
    }

    return (
        <>
            { StocksOfUser.length === 0
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
                            { StocksOfUser.map(({ stockName, qtdAvailable, lotValue}) => {
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

export default UserStocksData;

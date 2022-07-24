import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import AvailableStocksToInvestData from '../utils/AvailableStocksToInvestData';

function AvailableStocksToInvestTable() {
    const {
        setTypeOfStock,
        setStockInProgress,
    } = useContext(AppContext);

    const setNewStateForAvailableStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = AvailableStocksToInvestData.findIndex(
            ({stockName}) => stockName === correctStockName
        );

        const name = AvailableStocksToInvestData[correctStockIndex].stockName;
        const qtdAvailable = AvailableStocksToInvestData[correctStockIndex].qtdAvailable;
        const lotValue = AvailableStocksToInvestData[correctStockIndex].lotValue;

        setStockInProgress([name, qtdAvailable, lotValue]);
        setTypeOfStock(1);
    }

    return (
        <>
            { AvailableStocksToInvestData.length === 0
                    ? <p>Não existe nenhuma ação disponível para investir no momento</p> 
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da Ação</th>
                                <th>Quantidade</th>
                                <th>Valor do Lote (R$)</th>
                                <th>Negociar</th>
                            </tr>
                        </thead>

                        <tbody>
                                { AvailableStocksToInvestData.map(({ stockName, qtdAvailable, lotValue}) => {
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
                                                    onClick={ (target) => setNewStateForAvailableStocks(target) }
                                                >
                                                    C
                                                </button>
                                                </Link>

                                                <button
                                                    type="button"
                                                    name="sell-button"
                                                    disabled={ true }
                                                    className={ stockName }
                                                    onClick={ (target) => setNewStateForAvailableStocks(target) }
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
    );
}

export default AvailableStocksToInvestTable;

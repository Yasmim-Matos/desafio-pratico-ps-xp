import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function AvailableStocksToInvestData() {
    const {
        availableStocksSetters: {
            setAvailableStockName,
            setAvailableStocksQuantity,
            setUnitStockValue,
            setLotStockValue,
        },
        availableStocksData: {
            availableStockName,
            availableStocksQuantity,
            unitStockValue,
            lotStockValue,
        },

        setTypeOfStock,
        setStockInProgress,
    } = useContext(AppContext);

    const availableStocksToInvest = [
        {
            stockName: 'XP3',
            qtdAvailable: 1,
            unitValue: 10,
            lotValue: 10,
        },
        {
            stockName: 'XP4',
            qtdAvailable: 2,
            unitValue: 50,
            lotValue: 100,
        },
    ];

    const setNewStateForAvailableStocks = (stock) => {
        const correctStockName = stock.target.className;
        const correctStockIndex = availableStocksToInvest.findIndex(
            ({stockName}) => stockName === correctStockName
        );

        const name = availableStocksToInvest[correctStockIndex].stockName;
        const qtdAvailable = availableStocksToInvest[correctStockIndex].qtdAvailable;
        const unitValue = availableStocksToInvest[correctStockIndex].unitValue;
        const lotValue = availableStocksToInvest[correctStockIndex].lotValue;

        setAvailableStockName([...availableStockName, name]);
        setAvailableStocksQuantity([...availableStocksQuantity, qtdAvailable]);
        setUnitStockValue([...unitStockValue, unitValue]);
        setLotStockValue([...lotStockValue, lotValue]);

        setStockInProgress([name, qtdAvailable, unitValue, lotValue]);
        setTypeOfStock(1);
    }

    return (
        <>
            { availableStocksToInvest.length === 0
                    ? <p>Não existe nenhuma ação disponível para investir no momento</p> 
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da Ação</th>
                                <th>Quantidade</th>
                                <th>Valor Unitário (R$)</th>
                                <th>Valor do Lote (R$)</th>
                                <th>Negociar</th>
                            </tr>
                        </thead>

                        <tbody>
                                { availableStocksToInvest.map(({ stockName, qtdAvailable, unitValue, lotValue}) => {
                                    return (
                                        <tr key={ stockName }>
                                            <td>{ stockName }</td>
                                            <td>{ qtdAvailable }</td>
                                            <td>{ unitValue }</td>
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

export default AvailableStocksToInvestData;

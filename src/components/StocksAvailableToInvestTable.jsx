import React from 'react';
import StocksAvailableToInvestData from '../utils/StocksAvailableToInvestData';

function StocksAvailableToInvest() {
    return (
        <main className="stocks-available-container">
            <h3>Disponíveis para investir</h3>

            { StocksAvailableToInvestData.length === 0
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
                            { StocksAvailableToInvestData.map(({ stockName, qtdAvailable, unitValue, lotValue}) => {
                                return (
                                    <tr key={ stockName }>
                                        <td>{ stockName }</td>
                                        <td>{ qtdAvailable }</td>
                                        <td>{ unitValue }</td>
                                        <td>{ lotValue }</td>
                                        <td>
                                            <button
                                            type="button"
                                            name="buy-button"
                                            >
                                            C
                                            </button>
                                            <button
                                            type="button"
                                            name="sell-button"
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
        </main>
    );
}

export default StocksAvailableToInvest;

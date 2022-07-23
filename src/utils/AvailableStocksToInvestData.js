import React from 'react';

function AvailableStocksToInvestData() {
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
        </>
    );
}

export default AvailableStocksToInvestData;

import React from 'react';
import StocksBoughtData from '../utils/StocksBoughtData';

function UserStocks() {
    return (
        <main className="user-stocks-container">
            <h3>Minhas ações</h3>

            { StocksBoughtData.length === 0
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
                        { StocksBoughtData.map(({ stockName, qtdBought, amountPaid }) => {
                                return (
                                    <tr key={ stockName }>
                                        <td>{ stockName }</td>
                                        <td>{ qtdBought }</td>
                                        <td>{ amountPaid }</td>
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

export default UserStocks;

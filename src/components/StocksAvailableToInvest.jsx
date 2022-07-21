import React from 'react';

function StocksAvailableToInvest() {
    return (
        <main className="stocks-available-container">
            <h3>Disponíveis para investir</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nome da Ação</th>
                            <th>Quantidade</th>
                            <th>Valor Pago (R$)</th>
                            <th>Negociar</th>
                        </tr>
                    </thead>
                </table>
        </main>
    );
}

export default StocksAvailableToInvest;

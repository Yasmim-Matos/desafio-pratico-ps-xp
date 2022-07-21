import React from 'react';

function UserStocks() {
    return (
        <main className="user-stocks-container">
            <h3>Minhas ações</h3>
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

export default UserStocks;

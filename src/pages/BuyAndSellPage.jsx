import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function BuyAndSellPage() {
    const {
        typeOfStock,
        stockInProgress,
    } = useContext(AppContext);

    return (
        <main className="buy-and-sell-container">
            <Header />
            <h1>Buy And Sell</h1>

            { typeOfStock === 1
                ? 
                <table>
                    <thead>
                        <tr>
                            <th>Nome da Ação</th>
                            <th>Quantidade</th>
                            <th>Valor Unitário (R$)</th>
                            <th>Valor do Lote (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={ stockInProgress[0] }>
                                <td>{ stockInProgress[0] }</td>
                                <td>{ stockInProgress[1] }</td>
                                <td>{ stockInProgress[2] }</td>
                                <td>{ stockInProgress[3] }</td>
                            </tr>
                    </tbody>
                </table>
                :
                <table>
                        <thead>
                            <tr>
                            <th>Nome da Ação</th>
                            <th>Quantidade</th>
                            <th>Valor Pago (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={ stockInProgress[0] }>
                                <td>{ stockInProgress[0] }</td>
                                <td>{ stockInProgress[1] }</td>
                                <td>{ stockInProgress[2] }</td>
                            </tr>
                        </tbody>
                </table>
            }
            
            <button
                type="button"
                name="buy-button"
            >
                Comprar
            </button>

            <input type="number" />

            <button
                type="button"
                name="sell-button"
            >
                Vender
            </button>

            <input type="number" placeholder="Informe o Valor" />

            <Link to="/stocklist">
                <button
                    type="button"
                >
                    Voltar
                </button>
            </Link>

            <button
                type="button"
            >
                Confirmar
            </button>

            <Link to="/depositandwithdrawal">
                <button
                    type="button"
                >
                    Depósito/Retirada
                </button>
            </Link>
        </main>
    );
}

export default BuyAndSellPage;

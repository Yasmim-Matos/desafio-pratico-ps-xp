import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';

import LoginPage from './pages/LoginPage';
import StockListPage from './pages/StockListPage';
import BuyAndSellPage from './pages/BuyAndSellPage';
import DepositAndWithdrawalPage from './pages/DepositAndWithdrawalPage';

function App() {
  return (
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ LoginPage } />
          <Route path="/stocklist" component={ StockListPage } />
          <Route path="/buyandsell" component={ BuyAndSellPage } />
          <Route path="/depositandwithdrawal" component={ DepositAndWithdrawalPage } />
        </Switch>
      </AppProvider>
  );
}

export default App;
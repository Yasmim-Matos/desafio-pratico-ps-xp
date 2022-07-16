import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DepositAndWithdrawalPage from './pages/DepositAndWithdrawalPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ LoginPage } />
        <Route path="/depositAndWithdrawal" component={ DepositAndWithdrawalPage } />
      </Switch>
    </div>
  );
}

export default App;
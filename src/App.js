import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StockListPage from './pages/StockListPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/stocklist" component={ StockListPage } />
        <Route exact path="/" component={ LoginPage } />
      </Switch>
    </div>
  );
}

export default App;
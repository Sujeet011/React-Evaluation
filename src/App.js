// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

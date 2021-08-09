import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProductList from "./pages/products/Products";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/products/ProductDetail";
import PrivateRouter from "./components/private/PrivateRouter";


function App() {
  return (
    <Router>
      <Header/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={ProductList}/>
                <PrivateRouter path="/account" component={Account}/>
                <Route path="/login" component={Login}/>
                <Route path="/product/:id" component={ProductDetail}/>
            </Switch>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
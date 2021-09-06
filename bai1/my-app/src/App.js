import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Home from './components/footer/Footer';
// import ProductList from "./pages/products/Products";
// import Account from "./pages/account/Account";
// import Login from "./pages/login/Login";
// import ProductDetail from "./pages/products/ProductDetail";
// import PrivateRouter from "./components/private/PrivateRouter";

const Home = React.lazy(() => import('./pages/home/Home'));
const ProductList = React.lazy(() => import('./pages/products/Products'));
const Account = React.lazy(() => import('./pages/account/Account'));
const Login = React.lazy(() => import('./pages/login/Login'));
const ProductDetail = React.lazy(() => import('./pages/products/ProductDetail'));
const PrivateRouter = React.lazy(() => import('./components/private/PrivateRouter'));

function App() {
  return (
    <Router>
      <Header/>
        <div className="container">
          <Suspense fallback={<span>Loading...</span>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={ProductList}/>
                <PrivateRouter path="/account" component={Account}/>
                <Route path="/login" component={Login}/>
                <Route path="/product/:id" component={ProductDetail}/>
            </Switch>
            </Suspense>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
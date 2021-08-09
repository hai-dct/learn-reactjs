import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: 'red' }} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} to="/products">Product</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} to="/account">Account</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <div className="item">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
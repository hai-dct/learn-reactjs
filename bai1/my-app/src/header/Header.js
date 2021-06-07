import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <div className="header-left">
            <Logo className="logo"/>
            <ul>
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
            </ul>
          </div>
          <div className="dot-items">
            <span className="dot"></span>
            <span className="dot"></span> 
            <span className="dot"></span>   
          </div>
      </header>
    )
  };
}
export default Header;

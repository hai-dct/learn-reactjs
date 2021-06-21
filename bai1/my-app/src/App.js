import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

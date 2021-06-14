import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false,
      page: 'home'
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    this.setState(prev => ({
      color: !prev.color
    }));
  }

  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  render() {
    const { page }  = this.state;
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

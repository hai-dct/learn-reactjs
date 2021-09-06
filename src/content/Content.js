import React from 'react';
import Circle from '../custom/Circle';
import About from './module/About';
import RegisterForm from './module/register/RegisterForm';
import RegisterHookForm from './module/register/hooks/RegisterHookForm';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      inputTime: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputTime: event.target.value });
  }

  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  render() {
    const { page, inputTime } = this.state;


    const posts = [
      { id: 1, title: 'Hello World 1', content: 'Welcome to learning React!' },
      { id: 2, title: 'Hello World 2', content: 'Welcome to learning React!' },
      { id: 3, title: 'Hello World 3', content: 'Welcome to learning React!' },
      { id: 4, title: 'Hello World 4', content: 'Welcome to learning React!' },
      { id: 5, title: 'Installation', content: 'You can install React from npm.' }
    ];

    return (
      <main className="main">
        <button onClick={() => this.handleChangePage('home')}>Page Home</button>
        <button onClick={() => this.handleChangePage('about')}>Page About</button>
        <button onClick={() => this.handleChangePage('register')}>Page Register</button>
        {(page === 'home') &&
          <div className="circles">
            <div>
              <div>
                <input type="text" value={inputTime} onChange={this.handleChange} />
              </div>
              <div>
                {this.state.inputTime}
              </div>
              <Circle width='100px' height='100px' number={inputTime} />
            </div>
            <Circle width='100px' height='100px' number='123' />
            <Circle width='100px' height='100px' number='123' />
          </div>
        }
        {(page === 'about') && <About items={posts} /> }
        {(page === 'register') && <RegisterHookForm items={posts} /> }
      </main>
    )
  };
}
export default Content;

import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';

class Content extends React.Component {
  render() {
    return (
        <main className="main" >
            <div className="App-header">
              <Logo className="App-logo" alt="logo" />
              <h2>Hello react !</h2>
            </div>
        </main>
    )
  };
}
export default Content;

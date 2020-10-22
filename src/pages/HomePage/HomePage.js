import React,{ Component } from 'react';
import  logo  from './../../logo.svg';

class HomePage extends Component {
  render()
  {
    return (   
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> App ReactJs</h1>
      </header>
    </div> 
      );
  }
}

export default HomePage;

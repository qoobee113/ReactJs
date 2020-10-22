import React,{ Component } from 'react';
import logo  from './../../logo.svg';


export default class Loading extends Component {
    render(){
        return (   
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                        Loading...
              </p>
            </header>
          </div>
        );
    }
}
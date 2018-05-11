import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body';
import AppHeader from './Header';
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    // call createStore with the reducer
    this.store = store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <AppHeader imageSrc={logo} />
          <Body>
            <p>Hello there!</p>
            <p>Another thing</p>
          </Body>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body';
import AppHeader from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultArticleState = {
  title: "World Peace Declared",
  author: "Jerry",
  publishedOn: "4-16-67"
}

//reducer, provided with default state above
function article(state, action) {
  console.log("article reducer", state, action);

  switch(action.type) {
  case "UPDATE_TITLE":
    state.title = action.result.title;
    return state;

  default:
    return state;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // call createStore with the reducer
    this.store = createStore(article, defaultArticleState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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

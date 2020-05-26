import React, { Component } from 'react';
import Router from './src/components/routes/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  render() {
    console.disableYellowBox = true; 
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    )
  }
}


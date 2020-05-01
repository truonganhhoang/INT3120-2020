import React, { Component } from 'react';
import Router from './src/components/routes/Router';
import Test from './src/components/components/Test';
// import Test from './src/components/components/Test';
export default class App extends Component {
  render() {
    console.disableYellowBox = true; 
    return (
        // <Router />
        <Test />
    )
  }
}

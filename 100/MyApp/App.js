import React, { Component } from 'react';
import Router from './src/components/routes/Router';
import Test from './src/components/components/Test';
import Course from './src/components/components/Course';
import Screen1 from './src/components/screens/Screen1';
// import Test from './src/components/components/Test';
export default class App extends Component {
  render() {
    console.disableYellowBox = true; 
    return (
        <Router />
        // <Course />
        // <Screen1 />
        // <Test />
    )
  }
}

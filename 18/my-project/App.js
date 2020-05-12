/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import Splash from './screens/Splash';
import Index from './screens/Index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { startScreen: 'Splash' };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('Loading Splash');
      this.setState({ startScreen: 'Index' });
    }, 5);
  }

  render() {
    let mainScreen =
      this.state.startScreen === 'Splash' ? <Splash /> : <Index />;
    return mainScreen;
  }
}

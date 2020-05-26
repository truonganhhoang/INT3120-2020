/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import Splash from './screens/Splash';
import N_Drawer from './screens/Drawer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { startScreen: 'Splash' };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      this.setState({ startScreen: 'Drawer' });
    }, 5);
  }

  render() {
    let mainScreen =
      this.state.startScreen === 'Splash' ? <Splash /> : <N_Drawer />;
    return mainScreen;
  }
}

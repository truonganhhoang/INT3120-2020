/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Splash from './screens/Splash';
import Index from './screens/Index';
import Fire from './screens/firebase/config';

export default class App extends Component {
  state = {
    startScreen: 'Splash',
    lists: [],
    user: {},
    loading: true,
  };

  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        console.log('Loading Splash3');
        return alert('Uh oh, something went wrong!');
      }
      console.log('Loading Splash');

      firebase.getLists((lists) => {
        this.setState((prevState) => ({
          lists: (prevState.list = lists),
        }));
        console.log(lists);
      });

      console.log('Loading Splash1');
      this.setState({ startScreen: 'Index', user });
    });
    console.log('Ok Loading Splash');
  }

  // componentWillUnmount() {
  //   firebase.detach();
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = { startScreen: 'Splash' };
  //   setTimeout(() => {
  //     console.log('Loading Splash');
  //     this.setState({ startScreen: 'Index' });
  //   }, 5);
  // }

  render() {
    // console.log(this.state.user.uid);
    // let mainScreen =
    //   this.state.startScreen === 'Splash' ? <Splash /> : <Index />;
    // return mainScreen;
    return (
      <View style={styles.container}>
        <Text>{this.state.user.uid}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
});

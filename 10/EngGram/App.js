/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/*const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Group 10 : </Text>
              <Text style={styles.sectionDescription}>
                Suphit phommachan{'\n'}
                Cao Quy Dang{'\n'}
                Nguyen Xuan Duong{'\n'}
                ứng dụng chúng em sẽ làm là ứng dụng dạy tiếng Anh cho người bắt đầu trong đó gồm có minigame và thực hành về grammar và vân
                vân
                
                
              </Text>
              <Button
                title="Press me"
                 onPress={() => Alert.alert('Simple Button pressed')}
               />
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
*/

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default class App extends Component{
  render(){
    return(
      <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome to our App{'\n'}</Text>
              <Text style={styles.sectionTitle}>Group 10 : </Text>
              <Text style={styles.sectionDescription}>
                Suphit phommachan{'\n'}
                Cao Quy Dang{'\n'}
                Nguyen Xuan Duong{'\n'}</Text>
              <Text style={styles.sectionTitle}>App Descriptions : </Text>
              <Text  style={styles.sectionDescription}>
                ứng dụng chúng em sẽ làm là ứng dụng dạy tiếng Anh cho người bắt đầu trong đó gồm có minigame và thực hành về grammar và vân
                vân
                
                
              </Text>
              <Button
                title="Press me"
                 onPress={() => Alert.alert('Simple Button pressed')}
               />
            </View>
            
          </View>
      

    );
  }


};

/*import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; //React Navigation's StackNavigator provides a way for your app to transition between screens and manage navigation history

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />; 
  }
}
*/
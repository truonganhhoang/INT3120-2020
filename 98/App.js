import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import TrafficSigns from './screens/TrafficSigns';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { Icon } from 'react-native-elements';

class App extends Component {
    render() {
        return (
            <BottomTabNavigator />
        );
    }
}

export default App;

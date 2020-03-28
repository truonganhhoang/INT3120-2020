import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeNavigator from './navigation/HomeNavigator';
import TrafficSignList from './components/TrafficSignList';

class App extends Component {
    render() {
        return (
            <BottomTabNavigator />
        );
    }
}

export default App;

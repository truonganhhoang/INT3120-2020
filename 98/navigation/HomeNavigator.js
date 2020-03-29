import React, { Component } from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer, createNavigatorFactory } from '@react-navigation/native';
import Home from '../screens/Home';
import TrafficSigns from '../screens/TrafficSigns';

const Tab = createNavigatorFactory();

export default class HomeNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Home'
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                    />
                    <Tab.Screen
                        name="TrafficSigns"
                        component={TrafficSigns}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

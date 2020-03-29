import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TrafficSigns from '../screens/TrafficSigns';
//import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Trang chủ'
                    screenOptions={{
                        activeTintColor: '#1e63e9',
                    }}
                >
                    <Tab.Screen
                        name="Trang chủ"
                        component={Home}
                        options={{
                            tabBarLabel: 'Trang chủ',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account" color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Biển báo"
                        component={TrafficSigns}
                        options={{
                            tabBarLabel: 'Biển báo',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="bell" color={color} size={size} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default BottomTabNavigator;
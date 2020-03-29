import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TrafficSigns from '../screens/TrafficSigns';
//import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
          name="Trang chủ"
          component={Home}
          options={{
              tabBarLabel: 'Trang chủ',
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
          }}
      />
      <BottomTab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account" color={color} size={size} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Biển báo"
                        component={TrafficSigns}
                        options={{
                            tabBarLabel: 'Biển báo',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="bell" color={color} size={size} />
                            ),
                        }}
                    />
        
    </BottomTab.Navigator>
  );

}

export default BottomTabNavigator;
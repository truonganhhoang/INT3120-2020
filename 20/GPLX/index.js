/**
 * @format
 */

import { AppRegistry, StyleSheet, View, Text, Button, Settings } from 'react-native';
//import Top from './components/Top';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Bienbao from './components/Bienbaogiaothong';
import { MainScreen, DetailScreen } from './components/screenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from './components/Setting';
import {CommonActions} from '@react-navigation/native';
import Guide from './components/Huongdan';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator initialRouteName={MainScreen}>
      <Drawer.Screen name={MainScreen} component={Home} />
      <Drawer.Screen name="Cài đặt" component={Setting} />
      <Drawer.Screen name="Hướng dẫn sử dụng " component={Guide} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainScreen}>
        <Stack.Screen name={MainScreen} component={HomeScreen} />
        <Stack.Screen name={DetailScreen} component={Bienbao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);



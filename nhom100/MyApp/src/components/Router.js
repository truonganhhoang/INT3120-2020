import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Screen2 from './screens/Screen2';
import Screen1 from './screens/Screen1';
import Menuf from './screens/Menuf';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen1} />
      <Stack.Screen name="Danhmuc" component={Screen2} />
    </Stack.Navigator>
  );
}
import React, { Component } from 'react'

export default class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        )
    }
}

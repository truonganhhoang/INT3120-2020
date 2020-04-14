import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { createStackNavigator } from '@react-navigation/stack';
import Screen3 from '../screens/Screen3';
const Stack = createStackNavigator();

export default function Cartscreen3() {
  return (
        <Stack.Navigator
        screenOptions={{
          header: ()=> null
        }}
        >
            <Stack.Screen name="Cart" component={Screen3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
  );
}

import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function SignModal() {
  return (
        <Stack.Navigator
        screenOptions={{
          header: ()=> null
        }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
  );
}

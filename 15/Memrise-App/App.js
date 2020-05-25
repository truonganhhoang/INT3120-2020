import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer style={styles.container}>
        <AppNavigator />
      </NavigationContainer>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

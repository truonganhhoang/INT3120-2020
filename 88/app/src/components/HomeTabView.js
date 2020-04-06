import * as React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LearnScreen from './LearnScreen';
import PlayScreen from './PlayScreen';


const Tab = createMaterialTopTabNavigator();
const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          labelStyle: {
            fontSize: 16,
          },
          tabStyle: {
            borderColor: '#ffffff',
            // width: 'auto',

          },
          style: {backgroundColor: '#00BCD4'},
        }}>
        <Tab.Screen name="LEARN" component={LearnScreen} />
        <Tab.Screen name="PLAY" component={PlayScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExplanationsScreen from './ExplanationsScreen'
import ExercisesScreen from './ExercisesScreen'

const Tab = createMaterialTopTabNavigator();

export default function UnitScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explanations" component={ExplanationsScreen} />
      <Tab.Screen name="Excercises" component={ExercisesScreen} />
    </Tab.Navigator>  
  );
}

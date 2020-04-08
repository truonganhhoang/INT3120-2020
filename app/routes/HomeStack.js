import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import UnitScreen from '../screens/UnitScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{...styles,
            ...titleStyle,
            title: 'Advanced language practice',
            }}
        />
      <Stack.Screen 
        name="Unit" 
        component={UnitScreen} 
        options={
        ({ route }) => ({ title: route.params.title })
        }
        />
    </Stack.Navigator>
  );
}

const styles = {headerStyle: {backgroundColor: 'coral'}}
const titleStyle = {headerTitleAlign: 'center'}
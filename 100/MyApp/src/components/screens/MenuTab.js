import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen5 from './Screen5';
import Screen4 from './Screen4';
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
export default function MenuTab() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        tabBarPosition = "bottom"
        tabBarOptions={{
          activeTintColor: 'hotpink',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'pink',
          inactiveBackgroundColor: '#eee',
          showIcon: true,
          style: {height: 55}
        }}
      >
        <Tab.Screen name="Home" 
          component={Screen1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={22} color={color} />
            ),}}
        />
        <Tab.Screen name="D/M" component={Screen2}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="th" size={22} color={color} />
            ),}}
        />
        <Tab.Screen name="Cart" component={Screen3} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={22} color={color} />
          ),}}
        />
        <Tab.Screen name="T/B" component={Screen4}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" size={22} color={color} />
          ),}}
        />
        <Tab.Screen name="Acc" component={Screen5}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={22} color={color} />
          ),}}
        />
      </Tab.Navigator>
    //  </NavigationContainer>
  );
}
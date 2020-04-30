import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen5 from '../screens/Screen5';
import Screen4 from '../screens/Screen4';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();
export default function Main() {
  return (
      <Tab.Navigator
        tabBarPosition = "bottom"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#90CAF9',
          // activeBackgroundColor: '#AA00FF',
          // inactiveBackgroundColor: '#512DA8',
          showIcon: true,
          style: {height: 55, backgroundColor: "#0D47A1"}
        }}
      >
        <Tab.Screen name="Home" 
          component={Screen1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              // <FontAwesome5 name="home" size={24} color={color} />
              <Icon name='md-home' size={28} color={color}/>
            ),
          }}
          
        />
        <Tab.Screen name="D/M" component={Screen2}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name="md-list-box" size={28} color={color} />
            ),}}
        />
        <Tab.Screen name="Cart" component={Screen3} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-basket" size={28} color={color} />
          ),}}
        />
        <Tab.Screen name="T/B" component={Screen4}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" size={28} color={color} />
          ),}}
        />
        <Tab.Screen name="Acc" component={Screen5}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" size={28} color={color} />
          ),}}
        />
      </Tab.Navigator>
  );
}
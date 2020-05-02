import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen5 from '../screens/Screen5';
import Screen4 from '../screens/Screen4';
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
        <Tab.Screen name="Screen1" 
          component={Screen1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name='md-home' size={28} color={color}/>
            ),
          }}
        />
        <Tab.Screen name="Screen2" component={Screen2}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name="md-list-box" size={28} color={color} />
            ),}}
        />
        <Tab.Screen name="Screen3" component={Screen3} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-basket" size={28} color={color} />
          ),}}
        />
        <Tab.Screen name="Screen4" component={Screen4}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" size={28} color={color} />
          ),}}
        />
        <Tab.Screen name="Screen5" component={Screen5}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" size={28} color={color} />
          ),}}
        />
      </Tab.Navigator>
  );
}
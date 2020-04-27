import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen5 from '../screens/Screen5';
import Screen4 from '../screens/Screen4';
import Cartscreen3 from '../rnfirebase/Routes';
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
export default function MenuTab() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        tabBarPosition = "bottom"
        tabBarOptions={{
          activeTintColor: '#E1F5FE',
          inactiveTintColor: '#01579B',
          activeBackgroundColor: '#AA00FF',
          inactiveBackgroundColor: '#512DA8',
          showIcon: true,
          style: {height: 55, backgroundColor: "#0091EA"}
        }}
      >
        <Tab.Screen name="Home" 
          component={Screen1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
          
        />
        <Tab.Screen name="D/M" component={Screen2}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="th" size={24} color={color} />
            ),}}
        />
        <Tab.Screen name="Cart" component={Cartscreen3} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={24} color={color} />
          ),}}
        />
        <Tab.Screen name="T/B" component={Screen4}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell" size={24} color={color} />
          ),}}
        />
        <Tab.Screen name="Acc" component={Screen5}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),}}
        />
      </Tab.Navigator>
    //  </NavigationContainer>
  );
}
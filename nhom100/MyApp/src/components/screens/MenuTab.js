import * as React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen5 from './Screen5';
import Screen4 from './Screen4';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'aqua',
          inactiveBackgroundColor: '#932645',
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       iconName = focused
        //         ? 'ios-information-circle'
        //         : 'ios-information-circle-outline';
        //     } else if (route.name === 'Cart') {
        //       iconName = focused ? 'ios-list-box' : 'ios-list';
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
      >
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="D/M" component={Screen2} />
        <Tab.Screen name="Cart" component={Screen3} />
        <Tab.Screen name="T/B" component={Screen4} />
        <Tab.Screen name="Acc" component={Screen5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
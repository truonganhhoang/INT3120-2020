import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    <NavigationContainer style={{height:200}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'hotpink',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'pink',
          inactiveBackgroundColor: '#eee',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'D/M') {
              iconName = 'th';
            }else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            }else if (route.name === 'T/B') {
              iconName = 'bell';
            }else if (route.name === 'Acc') {
              iconName = 'user';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
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
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MenuTab from './MenuTab';
import Screen5 from './Screen5';
const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePage">
        <Drawer.Screen
          name="HomePage"
          component={MenuTab}
          options={{ drawerLabel: 'Trang chủ' }}
        />
        <Drawer.Screen
          name="Acc"
          component={Screen5}
          options={{ drawerLabel: 'Trang cá nhân' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
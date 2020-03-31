import React, { Component } from 'react';

import NavbarContent from './src/NavbarContent.js';
import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import createNextStack from  './src/ScreenTab.js';

const Drawer = createDrawerNavigator();


const navOptionHandler = () => ({
  headerShown: false
});


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <NavbarContent {...props} />}>
          <Drawer.Screen name="Trang chủ" component={createNextStack} 
            options={{
              drawerIcon: () => <Icon name="home-outline" color="yellow" size={30} />
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

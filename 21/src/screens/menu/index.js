import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import NavbarContent from './NavbarContent';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Icon } from 'native-base';

const Drawer = createDrawerNavigator();

export default class index extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <NavbarContent {...props}/>}>
                    <Drawer.Screen name="Trang chủ" component={HomeScreen}> 
                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
} 

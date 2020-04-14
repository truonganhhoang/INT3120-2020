import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from './HomeStack'
import About from '../screens/AboutScreen'

const Drawer = createDrawerNavigator()

export default function Navigator() {
    return(
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
    )
}
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { render } from 'react-dom';
// import appIcons from '../constants/AppIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MotobikeScreen from '../trafficlawscreen/motobikeScreen';
import CarScreen from '../trafficlawscreen/carScreen';
import MoreScreen from '../trafficlawscreen/moreScreen';

const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
  
// }

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function TrafficLaws() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Xe máy " component={MotobikeScreen} />
          <Tab.Screen name="Ô tô" component={CarScreen} />
          <Tab.Screen name="Khác" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      );
   
}
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 50
//     },
//     item: {
//         width: '33.33%',
//         height: SCREEN_HEIGHT / 5,
//         alignItems: "center"
//       },
//     text: {
//         padding: 5,
//         textAlign: 'center'
//     }
// });

//test
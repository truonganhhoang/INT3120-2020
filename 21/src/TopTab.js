import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Detail from './detail.js';
import Screen3 from './screens/screen3.js';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';

const MaterialTopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
});


export default class createTopTabs extends Component {
  createTopicStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={Detail} options={navOptionHandler}/>
    </Stack.Navigator>

  createLoveStack = (props) => 
    <Stack.Navigator>
      <Stack.Screen name="Screen3333" component={Screen3} options={navOptionHandler}/>
    </Stack.Navigator>


  render(){
    return(
      <MaterialTopTabs.Navigator
      tabBarOptions={{
        showIcon :'true',
        labelStyle: { fontSize: 16, color: 'white', fontWeight:'bold' },
        style: { backgroundColor: '#80aaff'},
        tabStyle :{flexDirection: 'row'}
      }}
    >
      <MaterialTopTabs.Screen name="CHỦ ĐỀ" component={this.createTopicStack} 
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <Icon name="library-shelves" size={30} color={'white'} />
          )
        }}
      />
      <MaterialTopTabs.Screen name="YÊU THÍCH" component={this.createLoveStack} 
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <Icon1 name="book" size={30} color={'white'} />
          )
        }}
      />
    </MaterialTopTabs.Navigator>
    )
  }
}
    


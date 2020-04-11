import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Motorcycle from './rules/Motorcycle'
import Other from './rules/Other'
import Car from './rules/Car'

const Tab = createMaterialTopTabNavigator();

export default class Rules extends React.Component {
  render(){
    return (
        <Tab.Navigator tabBarOptions={{
          activeTintColor: '#fff',
          labelStyle: { fontSize: 12, fontWeight: 'bold' },
          style: { backgroundColor: '#66bb6a' },
          pressColor:'green',
          scrollEnabled: false,
          indicatorStyle:{backgroundColor:'#fff'}
        }}>
          <Tab.Screen name="Xe máy" component={Motorcycle} />
          <Tab.Screen name="Ô tô" component={Car} />
          <Tab.Screen name="Khác" component={Other} />
        </Tab.Navigator>
    );
  }
}





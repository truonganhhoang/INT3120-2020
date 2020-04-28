import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, StatusBar, ScrollView, ImageBackground, Dimensions, useWindowDimensions } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'


import Home from './Home'
import Test from './Test'
import Learn from './Learn'
import Tutorial from './Tutorial'
import Skill from './Skill'
import Signs from './Signs'
import Rules from './Rules'
import Practice from './Tips/Practive'
import Theory from './Tips/Theory'
import Taplo from './Taplo'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack1 = createStackNavigator();


export function MyStack({ navigation }) {
  return (
    <NavigationContainer>
    <Stack1.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#66bb6a',
      },
    }}>

      <Stack1.Screen name="Test" component={Test} options={{
        title: 'Thi sát hạnh',
      }} />
      <Stack1.Screen name="Learn" component={Learn} options={{
        title: 'Học lý thuyết',
      }} />
      <Stack1.Screen name="Signs" component={Signs} options={{
        title: 'Biển báo đường bộ',
      }} />
      <Stack1.Screen name="Tips" component={MyTabs} options={{
        title: 'Mẹo thi kết quả cao',
      }} />
      <Stack1.Screen name="Rules" component={Rules} options={{
        title: 'Tra cứu luật',
      }} />
      <Stack1.Screen name="Taplo" component={Taplo} options={{
        title: 'Đèn cảnh báo trên taplo Ô tô',
      }} />
    </Stack1.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  menuIcon: {
    fontSize: 30,
    color: 'gray',
  }
})

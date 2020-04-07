import React from 'react';
import 'react-native-gesture-handler';
//import {StyleSheet, View, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from './screens/Profile';
import Classrooms from './screens/Classrooms';
import Notification from './screens/Notification';
import Questions from './screens/Questions';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hỏi đáp"
        component={Questions}
        options={{
          tabBarLabel: 'Hỏi đáp',
          tabBarIcon: () => (
            <Ionicons name="ios-help-circle" color="#999" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Lớp học"
        component={Classrooms}
        options={{
          tabBarLabel: 'Lớp học',
          tabBarIcon: () => (
            <Ionicons name="md-home" color="#999" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: () => (
            <Ionicons name="ios-notifications" color="#999" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={Profile}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: () => (
            <Ionicons name="ios-contact" color="#999" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

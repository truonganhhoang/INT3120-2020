import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import ClassRooms from '../screens/Classrooms';
import Notifications from '../screens/Notifications';
import Account from '../screens/Account';
import Questions from '../screens/Questions';
import DailyLogs from '../screens/DailyLogs';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="DailyLogs"
        component={DailyLogs}
        options={{
          title: 'Nhật ký',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="file-text" />,
        }}
      />
      <BottomTab.Screen
        name="Questions"
        component={Questions}
        options={{
          title: 'Hỏi đáp',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="help-circle" />,
        }}
      />
      <BottomTab.Screen
        name="Classrooms"
        component={ClassRooms}
        options={{
          title: 'Lớp học',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notifications}
        options={{
          title: 'Thông báo',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bell" />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Account':
      return 'Tài khoản';
    case 'Notification':
      return 'Thông báo';
    case 'Classrooms':
      return 'Lớp học';
    case 'Dailylogs':
      return 'Nhật ký';
    case 'Questions':
      return 'Hỏi đáp';
  }
}

import React, { Component } from 'react';
import { View, Text, Block } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Calendar } from './calendar';
import { ViewLesson } from './lessons';
import { NewTask, NewLesson, News } from './news';
import { ViewTask } from './tasks';
import { ViewExam } from './exams';
import { SettingScreen } from './setting';
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator();

const SwitchLessonTask = createSwitchNavigator({
  NewTaskScreen: NewTask,
  NewLessonScreen: NewLesson,
});

export const AppSwitchLessonTask = createAppContainer(SwitchLessonTask);

class DashboardScreen extends Component {
  componentDidMount() {
    Font.loadAsync({
      SanFrancisco: require('../assets/fonts/SanFrancisco.otf'),
    });
  }

  constructor(props) {
    super(props);
    this.user_id = this.props.navigation.getParam('curUser');
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let ionicon;

              if (route.name === 'Calendar') {
                ionicon = focused ? 'md-calendar' : 'ios-calendar';
              } else if (route.name === 'Setting') {
                ionicon = focused ? 'md-cog' : 'md-cog';
              } else if (route.name === 'New') {
                ionicon = focused ? 'md-add' : 'md-add-circle-outline';
              } else if (route.name === 'Task') {
                ionicon = focused ? 'md-checkmark' : 'md-checkmark-circle-outline';
              } else if (route.name === 'Exam') {
                ionicon = focused ? 'ios-book' : 'ios-bookmarks';
              } else if (route.name === 'Lesson') {
                ionicon = focused ? 'ios-book' : 'ios-bookmarks';
              } 
              return <Ionicons name={ionicon} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1976D2',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Task" component={ViewTask} />
          <Tab.Screen name="New" component={News} />
          <Tab.Screen name="Lesson" component={ViewLesson} />
          <Tab.Screen name="Exam" component={ViewExam} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default DashboardScreen;

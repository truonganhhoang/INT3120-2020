import React, { Component } from 'react'
import { View, Text, Block } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Calendar } from './calendar'
import { DayView } from './dayview'
import { NewTask } from './news'
import { ViewTask } from './tasks'
import { ViewExam } from './exams'

const Tab = createBottomTabNavigator()

class DashboardScreen extends Component {
  render() {
    console.log(this.props.navigation.getParam('curUser'));
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let ionicon

              if (route.name === 'Calendar') {
                ionicon = focused ? 'md-calendar' : 'ios-calendar'
              } else if (route.name === 'DayView') {
                ionicon = focused ? 'md-journal' : 'ios-today'
              } else if (route.name === 'New') {
                ionicon = focused ? 'md-add' : 'md-add-circle-outline'
              } else if (route.name === 'Task') {
                ionicon = focused ? 'md-checkmark' : 'md-checkmark-circle-outline'
              } else if (route.name === 'Exam') {
                ionicon = focused ? 'ios-book' : 'ios-bookmarks'
              }
              return <Ionicons name={ionicon} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="DayView" component={DayView} />
          <Tab.Screen name="New" component={NewTask} />
          <Tab.Screen name="Task" component={ViewTask} />
          <Tab.Screen name="Exam" component={ViewExam} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default DashboardScreen

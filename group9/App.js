import * as React from 'react';
import { Text, View,Block } from 'react-native';
import {Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Calendar} from './components/calendar' 
import {DayView} from './components/dayview' 
import {NewTask} from './components/news' 
import {ViewTask} from './components/tasks' 
import {ViewExam} from './components/exams' 
 
const Tab = createBottomTabNavigator();
 
export default class App extends React.Component {
 render() {
 return (
   <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let ionicon;
 
           if (route.name === 'Calendar') {
             ionicon = focused ? 'md-calendar' : 'ios-calendar';
           } else if (route.name === 'DayView') {
             ionicon = focused ? 'md-journal' : 'ios-today';
           } else if (route.name === 'New') {
             ionicon = focused ? 'md-add' : 'md-add-circle-outline';
           } else if (route.name === 'Task') {
             ionicon = focused ? 'md-checkmark' : 'md-checkmark-circle-outline';
           } else if (route.name === 'Exam') {
             ionicon = focused ? 'ios-book' : 'ios-bookmarks';
           }
           return <Ionicons name={ionicon} size={size} color={color} />;
                           
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
 )};
}


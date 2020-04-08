import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// import CategoryListItem from './components/CategoryListItem';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//import Navigator from './AppNavigator';

import ScreenCategories from './screens/Categories';
import ScreenCategory from './screens/Category';
import DoTheTest from './screens/DoTheTest';
import TestLession from './screens/TestLession';
import DataCategory from './screens/DataCategory';


//const AppContainer = createAppContainer(AppNavigator);
const Stack = createStackNavigator();
const StackForTest = createStackNavigator();
const BottomTab = createBottomTabNavigator();


const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Ngữ pháp trong tiếng Anh'
        component={ScreenCategories}
      />
      <Stack.Screen
        name='Test'
        component={ScreenCategory}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <Stack.Screen 
        name='Data' 
        component={ DataCategory }
      />
    </Stack.Navigator>
  )
}

const TestStackScreen = () => {
  return (
    <StackForTest.Navigator>
      <StackForTest.Screen name="Kiểm tra" component={DoTheTest} />
      <StackForTest.Screen name="Bài kiểm tra" component={TestLession} />
    </StackForTest.Navigator>
  )
}


export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              } else if (route.name === 'Testing') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0d658d',
            inactiveTintColor: 'gray',
          }}
        >
          <BottomTab.Screen name="Home" component={HomeStackScreen} />
          <BottomTab.Screen name="Testing" component={TestStackScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen 
      //       name='Ngữ pháp trong tiếng Anh' 
      //       component={ScreenCategories} 
      //       />
      //     <Stack.Screen 
      //       name='Test' 
      //       component={ScreenCategory} 
      //       options= { ({ route }) => ({ title: route.params.categoryName })}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: '#f7f7f7',
    paddingTop: 10
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 10
  }
});


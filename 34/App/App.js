import * as React from 'react';
import { Button, View, Text, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import { Styles } from './src/common';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import List from './src/Screen/flatList'
import HomeScreen from './src/Screen/homescreen'
import ChaoHoi from './src/Screen/chaohoi'
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './src/Screen/Search';
import TimKiem from './src/Screen/timkiem';


const Stack = createStackNavigator();


const PreNav = ({ navigation }) =>
  <Stack.Navigator initialRouteName="Home"
    //screecoptions:c cùng header header trên nhiều màn hình
    screenOptions={{
      headerStyle: {
        backgroundColor: '#008000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="TIẾNG ANH GIAO TIẾP"
      component={HomeScreen}
      options={{
        title: 'Tiếng Anh Giao Tiếp',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Icon.Button
            name="bars"
            backgroundColor="#008000"
            size={23}
            onPress={() => navigation.openDrawer()}
          >
          </Icon.Button>
        ),
      }}
    />
    <Stack.Screen
      name="List"
      component={List}
      options={{ title: 'Fast sentence' }}
    />

    <Stack.Screen
      name="ChaoHoi" 
      component={ChaoHoi}
      options={{ title: 'Chào hỏi' }}
    />

    <Stack.Screen
      name="TimKiem" 
      component={TimKiem}
      options={{ title: 'Dịch' }}
    />
  </Stack.Navigator>


import { OverrideDrawer } from './src/Screen/MyDrawer'
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={PreNav}

      //   drawerStyle={{
      //     backgroundColor: 'white',
      //     width: 280,
      //   }}
      //   drawerContentOptions={{
      //   activeTintColor: '#b7f5ae',
      //   itemStyle: { marginVertical: 5 },
      //   activeBackgroundColor: 'green'
      // }}

      drawerContent={props=><OverrideDrawer {...props} />}
        >
        <Drawer.Screen name="Home" component={PreNav} options={{drawerIcon:({props})=><Icon name='home-outline' size={30}/>}}
        />
        {/*
        <Drawer.Screen name="Profile" component={ChaoHoi} />
        <Drawer.Screen name="Structs" component={List} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <MyDrawer />
    
  );
}

export default App;

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, StatusBar, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }


// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        colors={['#66bb6a', '#d4fc79', '#96e6a1', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      >
        <View style={{ alignItems: 'center', flexDirection: 'row', top: 50, marginHorizontal: Dimensions.get("screen").width / 6 }}>
          <Image source={require('../assets/car.png')} />
          <Text style={{ left: 10, color: '#0094D5', fontWeight: 'bold', fontSize: 15 }}>Ôn thi {'\n'}Giấy phép lái xe B1</Text>
        </View>
      </LinearGradient>
      <ScrollView style={{ backgroundColor: '#fff', marginTop: 130 }}>
          <DrawerItem
            label='Học bằng lái xe'
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <Icon style={styles.menuIcon} name='car' />}
          />
          <DrawerItem
            label='Hướng dẫn sử dụng'
            onPress={() => props.navigation.navigate('Tutorial')}
            icon={() => <Icon style={styles.menuIcon} name='information-outline' />}
          />
          <DrawerItem
            label='Kỹ năng lái xe'
            onPress={() => props.navigation.navigate('Skill')}
            icon={() => <Icon style={styles.menuIcon} name='car' />}
          />
          <DrawerItem
            label='Chính sách và điều khoản'
            onPress={() => props.navigation.navigate('Skill')}
            icon={() => <Icon style={styles.menuIcon} name='contacts' />}
          />
      </ScrollView>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#fff',
      labelStyle: { fontSize: 12, fontWeight: 'bold' },
      style: { backgroundColor: '#66bb6a' },
      pressColor: 'green',
      scrollEnabled: false,
      indicatorStyle: { backgroundColor: '#fff' }
    }}>
      <Tab.Screen name="Mẹo lý thuyết" component={Theory} />
      <Tab.Screen name="Mẹo thực hành" component={Practice} />
    </Tab.Navigator>
  );
}


function MyStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#66bb6a',
      },
    }}>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Ôn thi giấy phép lái xe B1',
        headerLeft: () => (
          <Icon name='menu' size={30} style={{ left: 15 }} color='white' onPress={() => { navigation.openDrawer() }} />
        )
      }} />
      <Stack.Screen name="Tutorial" component={Tutorial} options={{
        title: 'Hướng dẫn chi tiết',
      }} />
      <Stack.Screen name="Skill" component={Skill} options={{
        title: 'Kỹ năng và kinh nghiệm lái xe',
      }} />



      <Stack.Screen name="Test" component={Test} options={{
        title: 'Thi sát hạnh',
      }} />
      <Stack.Screen name="Learn" component={Learn} options={{
        title: 'Học lý thuyết',
      }} />
      <Stack.Screen name="Signs" component={Signs} options={{
        title: 'Biển báo đường bộ',
      }} />
      <Stack.Screen name="Tips" component={MyTabs} options={{
        title: 'Mẹo thi kết quả cao',
      }} />
      <Stack.Screen name="Rules" component={Rules} options={{
        title: 'Tra cứu luật',
      }} />
      <Stack.Screen name="Taplo" component={Taplo} options={{
        title: 'Đèn cảnh báo trên taplo Ô tô',
      }} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{ width: '80%', }} hideStatusBar={true} initialRouteName='Home'
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MyStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
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

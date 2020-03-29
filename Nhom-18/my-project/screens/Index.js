import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'

import Home1 from './Home1'
import Home from './Home'
import Setting from './Setting'
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
      <Image source={require('../image/img1.jpg')} style={styles.imageHeader} />
      <View style={styles.textMenu1}>
        <DrawerItem
          label='Học bằng lái xe'
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <Icon style={styles.menuIcon} name='car' />}
        />
        <DrawerItem
          label='Hướng dẫn sử dụng'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='information-outline' />}
        />
        <DrawerItem
          label='Email hỗ trợ'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='email' />}
        />
        <DrawerItem
          label='Cài đặt'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='settings-outline' />}
        />
      </View>
      <View style={styles.textMenu2}>
        <DrawerItem
          label='Kỹ năng lái xe'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='car' />}
        />
        <DrawerItem
          label='Các ứng dụng khác'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='download' />}
        />
        <DrawerItem
          label='Chia sẻ ứng dụng'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='share-variant' />}
        />
        <DrawerItem
          label='Đánh giá ứng dụng'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='comment-account-outline' />}
        />
        <DrawerItem
          label='Chính sách và điều khoản'
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <Icon style={styles.menuIcon} name='contacts' />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#fff',
        headerStyle:{
          backgroundColor: '#66bb6a',
        },
    }}>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Ôn thi giấy phép lái xe',
        headerLeft:() =>(
          <Icon name='menu' size={30} style={{left:15}} color='white' onPress={() => {navigation.openDrawer()}}/>
        )
      }}/>
      <Stack.Screen name="Setting" component={Setting} options={{
        title: 'Chọn hạng bằng thi',
      }}/>
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{ width: '80%', }}
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
  imageHeader: {
    height: 200,
  },
  textMenu1:{
    borderBottomWidth:1.5,
    borderBottomColor:'#00000017',
  },
  menuIcon: {
    fontSize: 30,
    color: 'gray',
  }
})


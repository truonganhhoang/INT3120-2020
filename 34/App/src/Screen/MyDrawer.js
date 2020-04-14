import * as React from 'react';
import { Button, View, Text, ScrollView, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


export function OverrideDrawer(props) {
  return (
      <DrawerContentScrollView {...props}>
        <Image source={require('./img/hainguyen.jpg')} style={{width: 300, height: 200, marginTop: -5}} /> 
          {/* <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Màn hình chính</Text> } 
          onPress = {()=>{props.navigation.navigate('ChaoHoi')} }
          icon = {(props)=> <Icon name="home-outline" size={25} color={'rgb(1, 143, 30)'} /> }
        /> */}
        <View style={{marginLeft: 16,marginRight: 20, borderBottomWidth: 1, borderBottomColor: 'green'}}><Text style={{ fontSize: 20, color: 'green', padding: 5 }}>Tiện ích</Text></View>
        <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Dịch câu, từ</Text> } 
          onPress = {()=>{props.navigation.navigate('ChaoHoi')} }
          icon = {(props)=> <Icon name="arrow-decision-auto-outline" size={25} color={'rgb(149, 7, 168)'} /> }
          style={{ }}
        />
        <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Nhóm học tập </Text> } 
          onPress = {()=>{props.navigation.navigate('List')} }
          icon = {(props)=> <Icon name="account-group-outline" size={25} color={'rgb(36, 7, 168)'}/> }
        />
        <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Bạn muốn mua sách tiếng anh ?</Text> } 
          onPress = {()=>{props.navigation.navigate('List')} }
          icon = {(props)=> <Icon name="book-outline" size={25} color={'rgb(32, 145, 250)'} /> }
        />
        <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Đánh giá</Text> } 
          onPress = {()=>{props.navigation.navigate('List')} }
          icon = {(props)=> <Icon name="star" size={25} color={'orange'} /> }
        />
        <DrawerItem
          label= {(props)=> <Text style={{ fontSize: 16}} >Cài đặt</Text> } 
          onPress = {()=>{props.navigation.navigate('List')} }
          icon = {(props)=> <Icon name="settings-outline" size={25} /> }
        />
      </DrawerContentScrollView>
  );
}
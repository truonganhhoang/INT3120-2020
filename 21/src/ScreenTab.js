import React, { Component } from 'react';
import {Button} from 'native-base';
import {View, Image, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import TextTicker from 'react-native-text-ticker'

import createTopTabs from './TopTab.js';

import TraiDat from './screens/TraiDat/TraiDat.js';
import Screen3 from './screens/screen3.js';
import Cau2 from './screens/TraiDat/Cau2.js';

import KhoaHocVuTru from './screens/KhoaHocVuTru/KhoaHocVuTru.js';

const Stack = createStackNavigator();

createNextStack = ({navigation}) =>
    <Stack.Navigator>
      <Stack.Screen name="Top Tabs" component={createTopTabs} 
      options={{
        title: '10 VẠN CÂU HỎI VÌ SAO',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Button
              transparent
              onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={35} color={'white'} />
            </Button>
          ),
        headerStyle: {backgroundColor: '#80c1ff'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {paddingLeft: 20}
        }}

      />
      <Stack.Screen name="Trái Đất" children={TraiDat}
        options={{
          headerBackground: () => (
            <Image
                  source={{
                    uri:
                      'https://1.bp.blogspot.com/-7kizDZo7Q0I/V-vkKgEA1cI/AAAAAAAACdI/WDcWz1jVtpk9dyWgiqks6IMaFMB8j2v9ACLcB/s1600/vuelta.jpg',
                  }}
                  style={{
                    width: 450, height: 150,paddingTop: 50
                  }}
            />
          ),
          headerTintColor: 'white',
          headerStyle:{height: 150},
          headerTitleAlign: 'top'
        }}

      />
      <Stack.Screen name="Khoa Học Vũ Trụ" children={KhoaHocVuTru}
        options={{
          headerBackground: () => (
            <Image
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/alien-mothership-spaceship-deep-space-ufo-spacecraft-flying-universe-planet-stars-rear-view-d-rendering-render-127064275.jpg/',
                  }}
                  style={{
                    width: 450, height: 150,paddingTop: 50
                  }}
            />
          ),
          headerTintColor: 'white',
          headerStyle:{height: 150},
          headerTitleAlign: 'top'
        }}
      />
      <Stack.Screen name="Câu 1" component={Screen3} 
          options={{
            headerTitle: () => (
              <View style={{width: 150}}>
              <TextTicker
                style={{ fontSize: 15 }}
                animationType={'auto'}
                loop
                bounce={false}
                repeatSpacer={25}
                shouldAnimateTreshold={1}
              >
               KHÔNG KHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?
            </TextTicker>
            </View>
            ),
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              width: 150
            },
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
              <Icon2 name="search-minus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon2 name="search-plus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon name="heart-broken" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon1 name="setting" size={20} color={'white'} style={{paddingRight: 15}}/>
              </View>
            ),
          }}
      />
      <Stack.Screen name="Câu 2" component={Cau2} 
          options={{
            headerTitle: () => (
              <View style={{width: 150}}>
              <TextTicker
                style={{ fontSize: 15 }}
                animationType={'auto'}
                loop
                bounce={false}
                repeatSpacer={25}
                shouldAnimateTreshold={1}
              >
              TẦNG KHÍ QUYỂN DÀY BAO NHIÊU?
            </TextTicker>
            </View>
            ),
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              width: 150
            },
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
              <Icon2 name="search-minus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon2 name="search-plus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon name="heart-broken" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon1 name="setting" size={20} color={'white'} style={{paddingRight: 15}}/>
              </View>
            ),
          }}
      />
    </Stack.Navigator>



export default createNextStack;
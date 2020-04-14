import React, { Component } from 'react';
import {Button} from 'native-base';
import {View, Image, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import TextTicker from 'react-native-text-ticker';

import createTopTabs from './TopTab.js';

import TraiDat from './screens/TraiDat/TraiDat.js';

import KhoaHocVuTru from './screens/KhoaHocVuTru/KhoaHocVuTru.js';

const Stack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false
});

createNextStack= ({navigation}) => 
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
          headerLeftContainerStyle: {paddingLeft: 20}
          }}

      />
      <Stack.Screen name="Trái Đất" component={TraiDat}
        options={navOptionHandler}

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
          headerTitleStyle:{
            fontSize: 16
          }
        }}
      />
      </Stack.Navigator>





export default createNextStack;
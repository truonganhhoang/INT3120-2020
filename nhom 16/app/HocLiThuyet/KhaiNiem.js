import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
   
    tabBarTextStyle={{ fontSize: 17, fontWeight: 'bold',width:300}}
    tabBarPosition="bottom"
    tabBarActiveTextColor='#0101DF'
    tabBarInactiveTextColor='#fff'
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <View tabLabel='Câu 1'>
        
    </View>
    <View tabLabel='Biển báo nguy hiểm'>
        <Text>ho 2</Text>
    </View> 
    <View tabLabel='Biển báo nguy hiểm'>
        <Text>ho 2</Text>
    </View>
       
  </ScrollableTabView>;
}
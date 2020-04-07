import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Ban from './signs/Ban'
import Command from './signs/Command'
import Danger from './signs/Danger'
import Instruction from './signs/Instruction'

export default class Signs extends React.Component {

  render() {
    return <ScrollableTabView
      initialPage={0}
      tabBarBackgroundColor='#66bb6a'
      tabBarTextStyle={{ fontSize: 15, fontWeight: 'bold'}}
      tabBarActiveTextColor='#fff'
      tabBarInactiveTextColor='green'
      tabBarUnderlineStyle={{backgroundColor:'#fff',height: 0}}
      renderTabBar={() => <ScrollableTabBar />}
      // scrollWithoutAnimation={true}
    >
      <View tabLabel='Biển báo cấm'>
        <Ban />
      </View>
      <View tabLabel='Biển báo nguy hiểm'>
        <Danger />
      </View>
      <View tabLabel='Biển báo chỉ dẫn'>
        <Instruction />
      </View>
      <View tabLabel='Biển báo hiệu lệnh'>
        <Command />
      </View>
      
    </ScrollableTabView>
  }
}

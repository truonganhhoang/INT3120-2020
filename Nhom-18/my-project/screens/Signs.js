import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Ban from './signs/Ban'

export default class Signs extends React.Component {

  render() {
    return <ScrollableTabView
      initialPage={0}
      tabBarBackgroundColor='#66bb6a'
      tabBarTextStyle={{ fontSize: 15, fontWeight: 'bold'}}
      tabBarActiveTextColor='#fff'
      tabBarInactiveTextColor='#C0DF16'
      tabBarUnderlineStyle={{backgroundColor:'#fff',height: 2, width: '10%', marginHorizontal:Dimensions.get("screen").width/10}}
      renderTabBar={() => <ScrollableTabBar />}
      // scrollWithoutAnimation={true}
    >
      <View tabLabel='Biển báo cấm'>
        <Ban />
      </View>
      <Text tabLabel='Biển báo cấm'>Biển báo cấm1</Text>
      <Text tabLabel='Biển báo cấm'>Biển báo cấm2</Text>
      <Text tabLabel='Biển báo cấm'>Biển báo cấm3</Text>
      
    </ScrollableTabView>
  }
}

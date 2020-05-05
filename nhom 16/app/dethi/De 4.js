import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,CheckBox} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
   
    tabBarTextStyle={{ fontSize: 17, fontWeight: 'bold',width:150}}
    tabBarPosition="bottom"
    tabBarBackgroundColor="#04B431"
    
    tabBarActiveTextColor='#fff'
    
    tabBarInactiveTextColor='#fff'
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <View tabLabel='Câu 1'>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 1</Text>
        </View>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 2</Text>
        </View>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 3</Text>
        </View>
            
    </View>
    <View tabLabel='Câu 2'>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 1</Text>
        </View>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 2</Text>
        </View>
        <View style={{flex="row"}}><CheckBox
        title='Click Here'
        checked={this.state.checked}
        />
        <Text>ĐÁp án 3</Text>
        </View>
            
    </View>
    
       
   
         
  </ScrollableTabView>;
}
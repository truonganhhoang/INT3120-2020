import React, {Component} from 'react';
import moduleName, {View,Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ExerciseQuestion from './ExerciseQuestion';
import ExerciseAnswer from './ExerciseAnswer';
const ExerciseTab = props => {
    console.log(props.navigation.getParam('level'))
  return (
    <View style={{flex: 1}}>
    <View style={{
          flex: 0.8,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{marginBottom: 15, marginLeft: 15, flexDirection: 'row'}}>
        <Icon
            name="arrow-back"
            size={25}
            color="#fff"
            containerStyle={{}}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={{marginLeft: 30, fontSize: 20, color: '#fff'}}>
            Level {props.navigation.getParam('level')}
          </Text>
        </View>
    </View>
      <View style={{flex:9.2}}>
      <ScrollableTabView
        tabBarPosition="top"
        initialPage={0}
        locked={true}
        tabBarUnderlineStyle={{backgroundColor: 'white'}}
        renderTabBar={false}>
        <ExerciseQuestion />
        <ExerciseAnswer />
      </ScrollableTabView>
      </View>
    </View>
  );
};
export default withNavigation(ExerciseTab);

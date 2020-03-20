import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {Header} from 'react-native-elements';

export default class Calendar extends Component {
  render () {
    return (
      <View style={{flex:1}}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" 
          centerComponent={{ text: 'Calendar', style: { color: '#fff', fontSize:25 } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'center',
          }}
        />
        <CalendarList
          currentDate={'2020-3-12'}
          horizontal={true}
          pagingEnabled={true}
          calendarWidth={Math.round(Dimensions.get('window').width)}
        />
      <Text>Here is a text </Text>
      </View>
    )
  }
}

import * as React from 'react';
import {  View,Button } from 'react-native';

import {Test} from '../components/Test';
   
export default class ScreenOne extends React.Component {
  render () {
    return (
     <View>
     <Test/>
     <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Link')
          }
        />
     </View>
    )
  }
}

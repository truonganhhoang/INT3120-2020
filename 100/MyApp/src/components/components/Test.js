import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { View, Text } from 'native-base';
export default class Test extends Component {
  render() {
    return (
      <View>
        <Animatable.View animation="bounce">
          <Text>kkkkk</Text>
        </Animatable.View>
      </View>
    )
  }
}

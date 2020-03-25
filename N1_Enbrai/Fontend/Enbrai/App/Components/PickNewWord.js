import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from './CustomHeaderPicker'

export default class PickNewWord extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#009dd6' barStyle='light-content'></StatusBar>
        <CustomHeader />
        <LinearGradient
          style={styles.linearGradient}
          colors={['#00a8d4', '#39D57F']}
        >
          <View style={{
            flex: 9,
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Card
              containerStyle={{
                width: '50%',
                height: '30%',
                margin: 0,
                alignSelf: 'center'
              }}
            ></Card>
          </View>
          <View style={{ flex: 1 }}>
            <Text textStyle={{ color: '#fff' }}>Đã chọn 6 chủ đề</Text>
            <Icon name='edit' color='#fff' />
          </View>

        </LinearGradient>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
})
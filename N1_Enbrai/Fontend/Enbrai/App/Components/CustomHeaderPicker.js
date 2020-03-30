import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header
        placement="left"
        backgroundColor='#009dd6'
        barStyle='light-content'
        containerStyle={{
          display: 'flex',
          alignItems: 'flex-start',
          height: 70,
          shadowColor: "#020000",
          shadowOffset: {
            width: 1,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 16.00,
          elevation: 50,
          borderBottomWidth: 0
        }}
        leftComponent={{ text: 'Đã chọn 0 / 4', style: { color: '#fff', fontSize: 20, width: 200 } }}
        rightComponent={{ icon: 'check-circle', color: '#fff' }}
      />
    )
  }
}
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
            height: 70
            // shadowColor: 'white',
            // shadowOffset: {
            //   width: 1,
            //   height: 20
            // },
            // shadowOpacity: 0.5,
            // shadowRadius: 5,
            // elevation: 3,
            // overflow: 'hidden',
            // elevation: 4
          }}
          leftComponent={{ text: 'Đã chọn 0 / 4', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', width: 200 } }}
          rightComponent={{ icon: 'check-circle', color: '#fff' }}
        />
    )
  }
}
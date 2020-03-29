import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Back = (props: {navigation?: any }) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('StartScreen');
  }
  return (
    <Icon
      name="arrow-left"
      type='font-awesome'
      color='#FFF'
      size={20}
      onPress={onPress}
    />
  )
}
export default Back; 
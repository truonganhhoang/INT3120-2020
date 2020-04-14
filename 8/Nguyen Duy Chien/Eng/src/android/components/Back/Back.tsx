import React from 'react';
import { Icon } from 'react-native-elements';

const Back = (props: {navigation?: any; color?: any}) => {
  const { navigation } = props;
  let { color } = props;

  if ( color == null) {
    color = '#FFF'
  }
  
  const onPress = () => {
    navigation.goBack(); 
  }
  
  return (
    <Icon
      name="arrow-left"
      type='font-awesome'
      color={color}
      size={20}
      onPress={onPress}
    />
  )
}
export default Back; 
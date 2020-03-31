import React from 'react';
import { Icon } from 'react-native-elements';

const Back = (props: {navigation?: any; backScreen?: any; color?: any}) => {
  const { navigation } = props;
  let { backScreen, color } = props;
  if ( backScreen == null ) {
    backScreen = 'StartScreen'
  } 
  if ( color == null) {
    color = '#FFF'
  }
  
  const onPress = () => {
    console.log(backScreen); 
    navigation.navigate(backScreen);
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
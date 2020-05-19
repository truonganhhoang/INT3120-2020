import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const Back = (props: { navigation?: any; color?: any; onPress?: any }) => {
  const { navigation, onPress } = props;
  let { color } = props;

  if (color == null) {
    color = '#FFF'
  }

  const Back = () => {
    navigation.goBack();
  }

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Icon
          name="arrow-left"
          type='font-awesome'
          color={color}
          size={20}
  
        />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        onPress={Back}
      >
        <Icon
          name="arrow-left"
          type='font-awesome'
          color={color}
          size={20}
  
        />
      </TouchableOpacity>
    )
  }
}
export default Back; 
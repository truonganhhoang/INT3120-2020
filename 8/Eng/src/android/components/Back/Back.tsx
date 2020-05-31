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
        style={{ width: 60, height: 60 }}
      >
        <Icon
          name="arrow-left"
          type='font-awesome'
          color={color}
          size={25}
          iconStyle={{ paddingTop: 60,position: "absolute" }}
        />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        onPress={Back}
        style={{ margin: 5 }}
      >
        <Icon
          name="arrow-left"
          type='font-awesome'
          color={color}
          size={25}
  
        />
      </TouchableOpacity>
    )
  }
}
export default Back; 
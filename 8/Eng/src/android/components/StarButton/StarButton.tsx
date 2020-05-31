import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const StarButton = (props: { navigation?: any }) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('FavoriteScreen');
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: 30, height: 30 }}
    >
      <Icon
        name="star"
        type='font-awesome'
        color='white'
        iconStyle={{ fontSize:30 }}
      />
    </TouchableOpacity>
  )
}

export default StarButton; 
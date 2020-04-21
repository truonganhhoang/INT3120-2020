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
    >
      <Icon
        name="star"
        type='font-awesome'
        color='white'

      />
    </TouchableOpacity>
  )
}

export default StarButton; 
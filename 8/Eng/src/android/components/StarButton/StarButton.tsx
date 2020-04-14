import React from 'react';
import { Icon } from 'react-native-elements';

const StarButton = (props: { navigation?: any }) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('FavoriteScreen');
  }
  return (
    <Icon
      name="star"
      type='font-awesome'
      color='white'
      onPress={onPress}
    />
  )
}

export default StarButton; 
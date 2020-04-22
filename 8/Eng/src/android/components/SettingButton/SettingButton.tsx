import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingButton = (props: { navigation?: any; }) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.navigate('SettingScreen');
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      >
      <Icon
        name="cog"
        type='font-awesome'
        color='white'
      />
    </TouchableOpacity>

  )
}
export default SettingButton; 
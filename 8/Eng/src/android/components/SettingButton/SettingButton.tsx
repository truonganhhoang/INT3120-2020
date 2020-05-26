import React from 'react';
import { View } from 'react-native'; 
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
      style={{ width: 30, height: 30 }}
    >
      <Icon
        name="cog"
        type='font-awesome'
        color='white'
        iconStyle={{ fontSize:30 }}
        // style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>

  )
}
export default SettingButton; 
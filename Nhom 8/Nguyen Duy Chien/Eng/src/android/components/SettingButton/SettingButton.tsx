import React from 'react'; 
import { Button, Icon } from 'react-native-elements';  

const SettingButton = (props: {navigation?: any;}) => {
  const { navigation } = props; 
  const onPress = () => {
    navigation.navigate('SettingScreen'); 
  }
  return(
    <Button icon={
      <Icon 
        name="cog"
        type='font-awesome'
        color='#f50'
        onPress={onPress}
      />
    }/>
  )
}

export default SettingButton; 
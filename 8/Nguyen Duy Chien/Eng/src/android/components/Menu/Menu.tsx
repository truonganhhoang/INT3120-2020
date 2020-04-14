import React from 'react'; 
import { Icon } from 'react-native-elements'; 

const Menu = () => {
  const onPress = () => {
    
  }
  return (
    <Icon 
      name="ellipsis-v"
      type='font-awesome'
      color='orange'
      onPress={onPress}
    />
  )
}

export default Menu; 
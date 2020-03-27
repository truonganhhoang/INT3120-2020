import React from 'react'; 
import { Button, Icon } from 'react-native-elements';  

const StarButton = (props: { navigation?: any }) => {
  const { navigation } = props; 
  const onPress = () => {
    navigation.navigate('FavoriteScreen'); 
  }
  return(
    <Button icon={
      <Icon 
        name="star"
        type='font-awesome'
        color='#f50'
        onPress={onPress}
      />
    }/>
  )
}

export default StarButton; 
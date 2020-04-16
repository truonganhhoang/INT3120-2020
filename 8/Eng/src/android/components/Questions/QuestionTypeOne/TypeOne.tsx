import React from 'react';
import { View, Text } from 'react-native'; 
import { Image, Button, Icon } from 'react-native-elements'; 
import styles from './styles'; 

const TypeOne = (props: {content?: any}) => {

  const { content } = props; 

  console.log(content); 

  return (
    <View>
      <Text>Question Type One</Text>
      <Text>{content.txt_content}</Text>
      <Text>{content.f_void_uri}</Text>
      <Button 
        icon={<Icon 
          name="volume-up"
          type="font-awesome"
          style={styles.speak}
        />}
      />
    </View>
  )
}

export default TypeOne; 
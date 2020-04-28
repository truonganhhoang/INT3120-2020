import React from 'react'; 
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements'; 
import  styles from './style';   

const TypeThree = (props: {content?: any}) => {
  const { content } = props; 


  return (
    <View>
      <Text>Question Type Three</Text>
      <Image 
        source={{ uri: content.img_content }}
        style={styles.image}
      />
    </View>
  )
}

export default TypeThree; 
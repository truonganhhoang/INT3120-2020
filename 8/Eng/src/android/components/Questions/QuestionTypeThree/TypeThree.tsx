import React from 'react'; 
import { View } from 'react-native';
import { Image, Card } from 'react-native-elements'; 
import  styles from './style';   

const TypeThree = (props: { content?: any; id?: any }) => {
  const { content } = props; 
  return (
    <View style={styles.container}>
      <Card>
        <Image
          source={{ uri: content.img_content }}
          style={styles.image}
        />
      </Card>
    </View>
  )
}

export default TypeThree; 
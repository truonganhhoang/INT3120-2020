import React from 'react'; 
import { View, Text } from 'react-native'; 

const TypeTwo = (props: {content?: any}) => {
  const { content } = props; 
  console.log(content); 
  return (
    <View>
      <Text>
        Question Type Two
      </Text>
      <Text>{content.txt_content}</Text>
    </View>
  )
}

export default TypeTwo; 
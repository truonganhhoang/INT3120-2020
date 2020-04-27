import React from 'react'; 
import { View, Text } from 'react-native'; 

const TypeTwo = (props: {content?: any}) => {
  const { content } = props; 
  console.log(content); 
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100,marginBottom: 100}}>
      <Text  style={{ fontSize: 40, color: '#f57f17' }}>{content.txt_content}</Text>
    </View>
  )
}

export default TypeTwo; 
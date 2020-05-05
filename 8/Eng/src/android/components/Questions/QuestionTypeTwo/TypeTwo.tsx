import React from 'react'; 
import { View, Text } from 'react-native'; 
import layout from '../../../constants/layout'; 
const HEIGHT = layout.window.height;
const TypeTwo = (props: { content?: any; id?: any }) => {
  const { content } = props; 
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:HEIGHT*0.05,marginBottom: HEIGHT*0.1}}>
      <Text  style={{ fontSize: 40, color: '#f57f17' }}>{content.txt_content}</Text>
    </View>
  )
}

export default TypeTwo; 
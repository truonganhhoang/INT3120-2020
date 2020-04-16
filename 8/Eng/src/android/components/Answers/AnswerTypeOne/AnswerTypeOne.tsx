import React from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import styles from './styles'; 


const TypeOne = (props: {content?: any}) => {
  const { content } = props; 

  console.log(content); 

  const truePress = () => {
    
  }

  const falsePress = () => {

  }

  return (
    <View>
      <Text>Answer Type One</Text>
      <Button 
        title="TRUE"
        type="outline"
        style={styles.answerA}
        onPress={truePress}
      />
      <Button 
        title="FALSE"
        type="outline"
        style={styles.answerB}
        onPress={falsePress}
      />
    </View>
  )
}

export default TypeOne; 
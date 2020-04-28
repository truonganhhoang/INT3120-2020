import React from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import styles from './styles'; 

const Result = (props: { content?: any; navigation?: any }) => {
  const { content, navigation } = props; 
  const percent = Math.round(content.correct/(content.incorrect + content.correct) * 100); 
  const retest = () => {
    navigation.navigate('PracticeTestScreen', { topicName: content.topicName, lessonName: content.lessonName });
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text>Your result</Text>
      </View>
      <View style={styles.viewPercent}>
        <Text>{percent}</Text>
      </View>
      <View style={styles.viewInfo}>
        <Text>Correct: {content.correct}</Text>
        <Text>Incorrect: {content.incorrect}</Text>
      </View>
      <View style={styles.viewButtons}>
        <Button 
          title='RETEST'
          buttonStyle={styles.button}
          onPress={retest}
        />
      </View>
    </View>
  )
}

export default Result; 
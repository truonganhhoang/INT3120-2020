import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const Result = (props: { content?: any; navigation?: any }) => {
  const { content, navigation } = props;
  const correct = content.correct.amountOfTrue; 
  const incorrect = content.amountOfQuestion.amountOfQuestion - correct; 
  const percent = Math.round(correct / (incorrect + correct) * 100);
  const retest = () => {
    navigation.navigate('PracticeTestScreen', { topicName: content.topicName, lessonName: content.lessonName });
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Kết quả:</Text>
      </View>
      <View style={styles.viewPercent}>
        <Text style={{ fontSize: 60,color:'#ff5e00' }}>{percent} %</Text>
      </View>
      <View style={styles.viewInfo}>
        <View style={styles.viewChildInfo}>
          <Text style={styles.textInfo}>ĐÚNG: {correct}</Text>
        </View>
        <View style={styles.viewChildInfo}>
          <Text style={styles.textInfo}>SAI: {incorrect}</Text>
        </View>
      </View>
      <View style={styles.viewButtons}>
        <Button
          title='LÀM LẠI'
          buttonStyle={styles.button}
          onPress={retest}
        />
      </View>
    </View>
  )
}

export default Result; 
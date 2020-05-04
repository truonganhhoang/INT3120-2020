import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'; 
import { Button, Overlay } from 'react-native-elements'; 
import styles from './styles';

const Failed = (props: { navigation?: any, lessonInfo?: any, id?: any }) => {
  const { navigation, lessonInfo, id } = props; 
  const [visible, setVisible] = useState(true); 

  useEffect(() => {
    setVisible(true)
  }, [id])

  const tryAgain = () => {
    setVisible(false)
    navigation.navigate('GameChallengeScreen', { topicName: lessonInfo.topicName, lessonName: lessonInfo.lessonName })
  }

  const close = () => {
    setVisible(false)
    navigation.goBack(); 
  }

  return (
    <Overlay isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>FAILED</Text>
        <Text style={styles.comment}>Too bad you fail, try again!</Text>
        <Button 
          title='TRY AGAIN'
          onPress={tryAgain}
        />
        <Button 
          title='CLOSE'
          onPress={close}
        />
      </View>
    </Overlay>
  )
}

export default Failed; 
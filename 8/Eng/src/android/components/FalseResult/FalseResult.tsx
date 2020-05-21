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
    <Overlay isVisible={visible}
      overlayBackgroundColor='#f68383'
      overlayStyle={styles.containers}
    >
      <View style={styles.container}>
        <Text style={styles.title}>CHƯA HOÀN THÀNH</Text>
        <Text style={styles.comment}>Tiếc quá bạn chưa hoàn thành,thử lại nào</Text>
        <Button
          buttonStyle={styles.button}
          title='THỬ LẠI'
          titleStyle={{ color: '#f68383' }}
          onPress={tryAgain}
        />
        <Button
          buttonStyle={styles.button}
          title='ĐÓNG'
          titleStyle={{ color: '#f68383' }}
          onPress={close}
        />
      </View>
    </Overlay>
  )
}

export default Failed; 
import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button, Overlay } from 'react-native-elements'; 
import styles from './styles';

const PassResult = (props: { navigation?: any, lessonInfo?: any, id?: any }) => {
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
    overlayBackgroundColor='#9CCC65'
    overlayStyle={styles.containers}
    >
      <View style={styles.container}>
        <Text style={styles.title}>HOÀN THÀNH</Text>
        <Text style={styles.comment}>Chúc mừng bạn đã vượt qua thử thách này.</Text>
        <Button 
        buttonStyle={styles.button}
          title='THỬ LẠI'
          titleStyle={{color:'#ff5e00'}}
          onPress={tryAgain}
        />
        <Button 
         buttonStyle={styles.button}
          title='ĐÓNG'
          titleStyle={{color:'#ff5e00'}}
          onPress={close}
        />
      </View>
    </Overlay>
  )
}

export default PassResult; 
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import styles from './styles';
import { Grid, Row } from 'react-native-easy-grid';

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
    <Grid>
      <Overlay isVisible={visible}
        overlayBackgroundColor='#9CCC65'
        overlayStyle={styles.containers}
      >
        <Grid>
          <Row size={20}>
            <Text style={styles.title}>HOÀN THÀNH</Text>
          </Row>
          <Row size={20}>
            <Text style={styles.comment}>Chúc mừng bạn đã vượt qua thử thách.</Text>
          </Row>
          <Row size={60}>
            <View style={{ width: '60%' }}>
              <Button
                buttonStyle={styles.button}
                title='THỬ LẠI'
                titleStyle={{ color: '#ff5e00' }}
                onPress={tryAgain}
              />
              <Button
                buttonStyle={styles.button}
                title='ĐÓNG'
                titleStyle={{ color: '#ff5e00' }}
                onPress={close}
              />
            </View>
          </Row>
        </Grid>
      </Overlay>
    </Grid>

  )
}

export default PassResult; 
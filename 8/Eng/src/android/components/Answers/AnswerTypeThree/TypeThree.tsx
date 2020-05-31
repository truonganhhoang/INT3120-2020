import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { checkObject5 } from '../../../services/auth';
import firebase from 'firebase';
import styles from './styles';
import Sound from 'react-native-sound';
import { Grid, Row, Col } from 'react-native-easy-grid';
const WIDTH = Dimensions.get('window').width;

const TypeThree = (props: {
  content?: any; lessonInfo?: any;
  setNextQuestion?: any; id?: any; heart?: any; setHeart?: any
}) => {

  const { content, lessonInfo, setNextQuestion, id, heart, setHeart } = props;
  const database = firebase.database();
  const result = database.ref('/topic_detail/' +
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
    '/results/' + content.id);
  const [colorAnswerA, setColorAnswerA] = useState('white');
  const [colorAnswerB, setColorAnswerB] = useState('white');
  const [colorAnswerC, setColorAnswerC] = useState('white');
  const [colorAnswerD, setColorAnswerD] = useState('white');
  const [disabled, setDisabled] = useState(false);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    console.log('type' + 3)
    setStatus('loading')
    let check = 0;
    Object.keys(content).forEach((item, index) => {
      if (item == 'id') check++
      else if (item == 'content_a') check++
      else if (item == 'content_b') check++
      else if (item == 'content_c') check++
      else if (item == 'content_d') check++
    })
    if (check == 5) {
      setColorAnswerA('white');
      setColorAnswerB('white');
      setColorAnswerC('white');
      setColorAnswerD('white');
      setDisabled(false);
      setNextQuestion(false);
      setStatus('run')
    } else {
      setStatus('null')
    }
  }, [id])

  function onPress(selected = 'a') {
    result.on('value', function (snapshot: any) {
      if (selected == snapshot.val().text) {
        // xử lý khi chọn đúng 
        if (selected == "a") {
          setColorAnswerA('#81C784');
        } else if (selected == "b") {
          setColorAnswerB('#81C784');
        } else if (selected == "c") {
          setColorAnswerC('#81C784');
        } else if (selected == "d") {
          setColorAnswerD('#81C784');
        }
      }
      else {
        // xử lý khi chọn sai
        console.log('False');
        // đáp án sai tô màu đỏ
        if (selected == "a") {
          setColorAnswerA('#F44336')
        } else if (selected == "b") {
          setColorAnswerB('#F44336')
        } else if (selected == "c") {
          setColorAnswerC('#F44336')
        } else if (selected == "d") {
          setColorAnswerD('#F44336')
        }
        // đáp án đúng tô màu xanh
        if (snapshot.val().text == "a") {
          setColorAnswerA('#81C784')
        } else if (snapshot.val().text == "b") {
          setColorAnswerB('#81C784')
        } else if (snapshot.val().text == "c") {
          setColorAnswerC('#81C784')
        } else if (snapshot.val().text == "d") {
          setColorAnswerD('#81C784')
        }
        setHeart(heart - 1)
      }
      setDisabled(true);
      const speaker = new Sound(snapshot.val().void_uri, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        setTimeout(() => {
          speaker.release();
          setNextQuestion(true);
        }, speaker.getDuration() * 1000)
        speaker.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors')
          }
        })
      })
    })
  }

  useEffect(() => {
    if (status == null) {
      setTimeout(() => {
        setNextQuestion(true);
      }, 3000)
    }
  }, [status])

  if (status == 'loading') {
    return (
      <View style={{ flexDirection: 'column', alignItems: "center" }}>
        <Text>Waiting answer...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={{ flexDirection: 'column', alignItems: "center" }}>
        <Text>Sorry! The data is not Ready.</Text>
      </View>
    )
  }
  else {
    return (
      <Grid>
        <Row>
          <Col style={{ justifyContent: 'center', marginLeft: '4%' }}>
            <Button
              title={content.content_a}
              type="clear"
              onPress={() => onPress('a')}
              // disabled={disabled}
              buttonStyle={[styles.button, { backgroundColor: colorAnswerA }]}
              titleStyle={styles.text}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ justifyContent: 'center', marginLeft: '4%' }}>
            <Button
              title={content.content_b}
              type="clear"
              onPress={() => onPress('b')}
              // disabled={disabled}
              buttonStyle={[styles.button, { backgroundColor: colorAnswerB }]}
              titleStyle={styles.text}
            /></Col>
        </Row>
        <Row>
          <Col style={{ justifyContent: 'center', marginLeft: '4%' }}>
            <Button
              title={content.content_c}
              type="clear"
              onPress={() => onPress('c')}
              // disabled={disabled}
              buttonStyle={[styles.button, { backgroundColor: colorAnswerC }]}
              titleStyle={styles.text}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ justifyContent: 'center', marginLeft: '4%' }}>
            <Button
              title={content.content_d}
              type="clear"
              onPress={() => onPress('d')}
              // disabled={disabled}
              buttonStyle={[styles.button, { backgroundColor: colorAnswerD }]}
              titleStyle={styles.text}
            /></Col>
        </Row>
      </Grid>
    )
  }
}

export default TypeThree; 
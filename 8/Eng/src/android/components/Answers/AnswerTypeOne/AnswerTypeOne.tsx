import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import styles from './styles';
import timer from '../../../constants/timer';
import layout from '../../../constants/layout';
import { Grid, Row, Col } from 'react-native-easy-grid';
const HEIGHT = layout.window.height;

const TypeOne = (props: {
  content?: any; lessonInfo?: any;
  setNextQuestion?: any; id?: any; heart?: any; setHeart?: any
}) => {
  const { content, lessonInfo, setNextQuestion, id, heart, setHeart } = props;
  const database = firebase.database();
  const result = database.ref('/topic_detail/' +
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
    '/results/' + content.id);
  const [styleButtonA, setStyleButtonA] = useState({ color: 'white', disabled: false });
  const [styleButtonB, setStyleButtonB] = useState({ color: '#white', disabled: false });
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    console.log('type' + 1)
    setStatus('loading');
    let check = 0;
    Object.keys(content).forEach((item, index) => {
      if (item == 'id') check++
      else if (item == 'content_a') check++
      else if (item == 'content_b') check++
    })
    if (check == 3) {
      setStyleButtonA({ color: 'white', disabled: false });
      setStyleButtonB({ color: 'white', disabled: false });
      setNextQuestion(false);
      setStatus('run');
    } else {
      setStatus('null');
    }
  }, [id])

  useEffect(() => {
    if (status == null) {
      setTimeout(() => {
        setNextQuestion(true);
      }, 3000)
    }
  }, [status])

  // console.log(content);   
  // console.log(lessonInfo); 

  const contentAPress = () => {
    result.on('value', function (snapshot: any) {
      if (snapshot.val().text == "a") {
        console.log('True');
        setStyleButtonA({ color: '#43a047', disabled: true });
        setStyleButtonB({ color: 'white', disabled: true })
      } else if (snapshot.val().text == "b") {
        console.log('False');
        setStyleButtonB({ color: '#43a047', disabled: true });
        setStyleButtonA({ color: '#f44336', disabled: true });
        setHeart(heart - 1)
      }
      setTimeout(() => {
        setNextQuestion(true);
      }, timer.waitingForReviews)
    })
  }

  const contentBPress = () => {
    result.on('value', function (snapshot: any) {
      if (snapshot.val().text == "b") {
        console.log('True');
        setStyleButtonB({ color: '#43a047', disabled: true });
        setStyleButtonA({ color: 'white', disabled: true });
      } else if (snapshot.val().text == "a") {
        console.log('False');
        setStyleButtonA({ color: '#43a047', disabled: true });
        setStyleButtonB({ color: '#f44336', disabled: true });
        setHeart(heart - 1)
      }
      setTimeout(() => {
        setNextQuestion(true);
      }, timer.waitingForReviews)
    })
  }

  if (status == 'loading') {
    return (
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: HEIGHT * 0.1 }}>
        <Text>Waiting answer...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: HEIGHT * 0.1 }}>
        <Text>Sorry! The data is not Ready.</Text>
      </View>
    )
  }
  else {
    return (
      <Grid>
        <Row>
          <Col style={{ justifyContent: 'center' }}>
            <Button
              title={content.content_a}
              titleStyle={{ color: 'black' }}
              type="clear"
              style={styles.answerA}
              onPress={contentAPress}
              disabled={styleButtonA.disabled}
              buttonStyle={
                {
                  backgroundColor: styleButtonA.color,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                  width: '70%',
                  marginLeft: '15%',
                  padding: '6%'
                }
              }
            /></Col>
          <Col style={{ justifyContent: 'center' }}>
            <Button
              title={content.content_b}
              titleStyle={{ color: 'black' }}
              type="clear"
              style={styles.answerB}
              onPress={contentBPress}
              disabled={styleButtonB.disabled}
              buttonStyle={
                {
                  backgroundColor: styleButtonB.color,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                  width: '70%',
                  marginLeft: '15%',
                  padding: '6%'
                }
              }
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default TypeOne; 
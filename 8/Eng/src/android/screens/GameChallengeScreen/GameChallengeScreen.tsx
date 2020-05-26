import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { CountDown } from '../../components/CountDown';
import { Back } from '../../components/Back';
import firebase from 'firebase';
import { random } from '../../services';
import { QuestionContent } from '../../components/QuestionContent';
import { AnswerContent } from '../../components/AnswerContent';
import { Activity } from '../Utils/activity';
import { FalseResult } from '../../components/FalseResult';
import { PassResult } from '../../components/PassResult';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from './styles';
const WIDTH = Dimensions.get('window').width;

const Game = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props;
  const lessonInfo = route.params
  const [heart, setHeart] = useState(3);
  const [id, setId] = useState(lessonInfo.lessonName)
  const [contentOfQuestion, setContentOfQ] = useState({ type: '', status: 'loading' });
  const [contentOfAnswer, setContentOfA] = useState({ type: '', status: 'loading' });
  const [questionNumber, setQuestionNumber] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [count, setCount] = useState(0);
  const [failed, setFailed] = useState(false);
  const [passed, setPassed] = useState(false);
  const [stop, setStop] = useState(false);
  const database = firebase.database();
  const amountOfQuestion = 10;

  useEffect(() => {
    navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.headerTitle,
      headerTitleAlign: "center",
      headerTintColor: "#ff5e00",
      headerLeft: () => {
        return (
          <Back
            navigation={navigation}
            onPress={EndGame}
            color="#ff5e00"
          />)
      },
    })
    setId(lessonInfo.lessonName + random(0, 10000));
    setHeart(3)
    setContentOfQ({ type: '', status: 'loading' });
    setContentOfA({ type: '', status: 'loading' });
    if (nextQuestion) {
      setNextQuestion(false);
    }
    setCount(0);
    setQuestionNumber(random(0, 19));
    setFailed(false);
    setPassed(false);
    setStop(false);
  }, [lessonInfo])

  useEffect(() => {
    console.log(questionNumber)
    const question = database.ref('/topic_detail/' +
      lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
      '/questions/' + questionNumber);
    question.on('value', function (snapshot: any) {
      if (snapshot.val()) {
        setContentOfQ(snapshot.val());
      } else {
        setContentOfQ({ type: '', status: 'null' });
      }
    });
    const answer = database.ref('/topic_detail/' +
      lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
      '/answers/' + questionNumber);
    answer.on('value', function (snapshot: any) {
      if (snapshot.val()) {
        setContentOfA(snapshot.val());
      } else {
        setContentOfA({ type: '', status: 'null' })
      }
    })
    if (nextQuestion) {
      setNextQuestion(false);
    }
  }, [questionNumber])

  useEffect(() => {
    if (nextQuestion) {
      let c = count + 1;
      setCount(c);
      setQuestionNumber(random(0, 19));
      // setQuestionNumber(15); 
    }
  }, [nextQuestion])

  useEffect(() => {
    if (failed || passed) {
      setNextQuestion(false);
    }
  }, [failed, passed])

  useEffect(() => {
    // set passed
    if (count == amountOfQuestion && heart > 0) {
      setPassed(true);
    }
    else if (heart <= 0) {
      setFailed(true);
    }
  }, [count, heart])
  const hearts: JSX.Element[] = [];
  for (let index = 0; index < heart; index++) {
    hearts.push(
      <Icon
        type="material"
        name="favorite"
        iconStyle={{ fontSize: 15, paddingTop: 4, color: 'red' }}
      />
    );
  }

  const EndGame = () => {
    setStop(true)
    navigation.goBack();
  }

  // check failed if true => show FalseResult then teminate
  if (failed) {
    return (<FalseResult navigation={navigation} lessonInfo={lessonInfo} />)
  }
  else if (passed) {
    return (<PassResult navigation={navigation} lessonInfo={lessonInfo} />)
  }
  else {
    if (contentOfQuestion.status == 'loading' || contentOfAnswer.status == 'loading') {
      return (<Activity />)
    }
    else if (contentOfQuestion.status == 'null' || contentOfAnswer.status == 'null') {
      return (
        <View>
          <Text>Sorry! The data is not available.</Text>
        </View>
      )
    }
    else {
      return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
          <Grid>
            <Row size={6} style={{ padding: '2%' }}>
              <Col size={15} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <CountDown
                  hours={0}
                  minutes={2}
                  seconds={10}
                  id={id}
                  setTimeOut={setFailed}
                  stop={stop}
                /></Col>
              <Col size={70} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Progress.Bar progress={(count / amountOfQuestion)} borderColor="#dddee0" width={WIDTH * 0.65} color="#ff5e00" height={6} style={{ backgroundColor: '#dddee0' }} />
              </Col>
              <Col size={15} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Row style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: '10%' }}>
                  {
                    hearts.map(item => {
                      return item;
                    })
                  }
                </Row>
              </Col>
            </Row>
            <Row size={44} style={{ justifyContent: 'center' }}>
              <QuestionContent contentOfQuestion={contentOfQuestion} count={count} />
            </Row>
            <Row size={50}>
              <AnswerContent
                contentOfAnswer={contentOfAnswer}
                lessonInfo={lessonInfo}
                setNextQuestion={setNextQuestion}
                count={count}
                heart={heart}
                setHeart={setHeart}
              />
            </Row>
          </Grid>
          {/* <Text style={{textAlign:'center'}}>{questionNumber}</Text> */}
          {/* <View style={{ flex: 40 }}>
            <QuestionContent contentOfQuestion={contentOfQuestion} count={count} />
          </View>
          <View style={{ flex: 40 }}>
            <AnswerContent
              contentOfAnswer={contentOfAnswer}
              lessonInfo={lessonInfo}
              setNextQuestion={setNextQuestion}
              count={count}
              heart={heart}
              setHeart={setHeart}
            />
          </View> */}
        </SafeAreaView>
      )
    }
  }
}

export default Game; 
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Dimensions } from 'react-native';
import styles from './styles';
import firebase from 'firebase';
import { random } from '../../services';
import { QuestionContent } from '../../components/QuestionContent';
import { AnswerContent } from '../../components/AnswerContent';
import { AskQuestionNumber } from '../../components/AskQuestionNumber';
import { PracticeTestResult } from '../../components/PracticeTestResult';
import { Activity } from '../Utils/activity';
import * as Progress from 'react-native-progress';
const WIDTH = Dimensions.get('window').width;
import { Grid, Row, Col } from 'react-native-easy-grid';

const Practice = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props;
  const lessonInfo = route.params;
  const [amountOfQuestion, setAmountOfQ] = useState(0);
  const [contentOfQuestion, setContentOfQ] = useState({ type: '', status: 'loading' });
  const [contentOfAnswer, setContentOfA] = useState({ type: '', status: 'loading' });
  const [questionNumber, setQuestionNumber] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [count, setCount] = useState(0);
  const [amountOfTrue, setAmountOfTrue] = useState(0);
  const database = firebase.database();

  useEffect(() => {
    navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.headerTitle,
      headerTitleAlign: "center",
      headerTintColor: "#ff5e00",
    })
    setAmountOfQ(0);
    setCount(0);
    setContentOfQ({ type: '', status: 'loading' });
    setContentOfA({ type: '', status: 'loading' });
    if (nextQuestion) {
      setNextQuestion(false);
    }
    setAmountOfTrue(0)
  }, [lessonInfo])

  useEffect(() => {
    if (amountOfQuestion > 0) {
      setQuestionNumber(random(0, 19));
      setAmountOfTrue(amountOfQuestion);
    }
  }, [amountOfQuestion])

  useEffect(() => {
    if (nextQuestion) {
      let c = count + 1;
      setCount(c);
      setQuestionNumber(random(0, 19));
    }
  }, [nextQuestion])

  useEffect(() => {
    console.log(questionNumber);
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

  if (amountOfQuestion == 0) {
    return (
      <AskQuestionNumber setAmountOfQ={setAmountOfQ} />
    )
  }
  else {
    if (count < amountOfQuestion) {
      if (contentOfQuestion.status == 'loading' || contentOfAnswer.status == 'loading') {
        return (<Activity />)
      }
      else if (contentOfQuestion.status == 'null' || contentOfAnswer.status == 'null') {
        return (
          <SafeAreaView>
            <Text>Sorry! The data is not available.</Text>
          </SafeAreaView>
        )
      }
      else {
        return (
          <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <Grid>
              <Row size={6} style={{ padding: '2%' }}>
                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#ff5e00' }}>{count}/{amountOfQuestion}</Text>
                  </Row>
                  <Row>
                    <Col size={50} style={{ alignItems: 'center', justifyContent: 'center' }}>
                      {/* <Progress.Bar progress={(count / amountOfQuestion)} borderColor="#dddee0" width={WIDTH * 0.65} color="#ff5e00" height={6} style={{ backgroundColor: '#dddee0' }} /> */}
                      <Progress.Bar progress={(count / amountOfQuestion)} width={WIDTH * 0.9} borderColor="#dddee0" color='#ff5e00' style={{ backgroundColor: '#dddee0' }} height={8} />
                    </Col>
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
                  heart={amountOfTrue}
                  setHeart={setAmountOfTrue}
                />
              </Row>
            </Grid>
          </SafeAreaView>
        )
      }
    }
    else {
      return (
        <SafeAreaView>
          <PracticeTestResult
            content={{
              topicName: lessonInfo.topicName,
              lessonName: lessonInfo.lessonName,
              correct: { amountOfTrue },
              amountOfQuestion: { amountOfQuestion }
            }}
            navigation={navigation}
          />
        </SafeAreaView>
      )
    }
  }
}

export default Practice; 
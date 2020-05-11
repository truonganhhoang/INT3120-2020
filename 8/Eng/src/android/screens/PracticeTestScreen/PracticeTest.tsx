import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import { Back } from '../../components/Back';
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
          <View>
            <Header containerStyle={styles.headerContainer}
              leftComponent={
                <Back
                  navigation={navigation}
                />}
              centerComponent={{ text: lessonInfo.lessonName, style: styles.headerTitle }}
            />
            <View><Text>Sorry! The data is not available.</Text></View>
          </View>
        )
      }
      else {
        return (
          <View style={styles.container}>
            <Header containerStyle={styles.headerContainer}
              leftComponent={
                <Back
                  navigation={navigation}
                />}
              centerComponent={{ text: lessonInfo.lessonName, style: styles.headerTitle }}
            />
            <View style={styles.count}>
              <Text style={{ paddingTop: 10, fontSize: 16, color: '#ff5e00' }}>{count}/{amountOfQuestion}</Text>
            </View>

            <View style={styles.slider}>
              <Progress.Bar progress={(count/amountOfQuestion)} width={WIDTH-15} color="#ff5e00" height={8}/>
            </View>
            <View>
              <QuestionContent contentOfQuestion={contentOfQuestion} count={count}/>
              <AnswerContent 
                contentOfAnswer={contentOfAnswer} 
                lessonInfo={lessonInfo}
                setNextQuestion={setNextQuestion}
                count={count}
                heart={amountOfTrue}
                setHeart={setAmountOfTrue}
              />
            </View>
          </View>
        )
      }
    }
    else {
      return (
        <View>
          <Header containerStyle={styles.headerContainer}
            leftComponent={
              <Back
                navigation={navigation}
              />}
            centerComponent={{ text: lessonInfo.lessonName, style: styles.headerTitle }}
          />
          <View>
            <PracticeTestResult
              content={{
                topicName: lessonInfo.topicName,
                lessonName: lessonInfo.lessonName,
                correct: {amountOfTrue},
                amountOfQuestion: {amountOfQuestion}
              }}
              navigation={navigation}
            />
          </View>
        </View>
      )
    }
  }
}

export default Practice; 
import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'; 
import { Header } from 'react-native-elements'; 
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
import styles from './styles'; 
const WIDTH = Dimensions.get('window').width;

const Game = (props: {route?: any; navigation?: any}) => {
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
  const database = firebase.database();
  const amountOfQuestion = 10; 

  useEffect(() => {
    setId(lessonInfo.lessonName + random(0, 10000)); 
    setHeart(3)
    setContentOfQ({type: '', status: 'loading'}); 
    setContentOfA({type: '', status: 'loading'});
    if (nextQuestion){
      setNextQuestion(false); 
    }
    setCount(0); 
    setQuestionNumber(random(0, 19)); 
    setFailed(false);
    setPassed(false); 
  }, [lessonInfo])

  useEffect(() => {
    const question = database.ref('/topic_detail/' + 
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
    '/questions/' + questionNumber); 
    question.on('value', function(snapshot: any){
      if (snapshot.val()) {
        setContentOfQ(snapshot.val()); 
      } else {
        setContentOfQ({type: '', status: 'null'}); 
      }
    }); 
    const answer = database.ref('/topic_detail/' + 
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
    '/answers/' + questionNumber); 
    answer.on('value', function(snapshot: any){ 
      if (snapshot.val()) {
        setContentOfA(snapshot.val()); 
      } else {
        setContentOfA({ type: '', status: 'null' })
      }
    })
    if (nextQuestion){
      setNextQuestion(false); 
    }
  }, [questionNumber])

  useEffect(() => {
    if (nextQuestion) {
      let c = count + 1; 
      setCount(c);
      setQuestionNumber(random(0, 19));
    }
  }, [nextQuestion])

  useEffect(() => {
    if(failed || passed) {
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

  // check failed if true => show FalseResult then teminate
  if (failed) {
    return (<FalseResult navigation={navigation} lessonInfo={lessonInfo}/>)
  }
  else if (passed) {
    return (<PassResult navigation={navigation} lessonInfo={lessonInfo}/>)
  }
  else {
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
        <View>
          <Header containerStyle={styles.headerContainer}
            leftComponent={
              <Back
                navigation={navigation}
              />}
            centerComponent={{ text: lessonInfo.lessonName, style: styles.headerTitle }}
          />
          <View style={styles.infoView}>
            <Text>Remain Heart: {heart}</Text>
            <CountDown 
              hours={0} 
              minutes={1} 
              seconds={10} 
              id={id}
              setTimeOut={setFailed}
            />
            <Progress.Bar progress={(count/amountOfQuestion)} width={WIDTH-15} color="#ff5e00" height={8}/>
          </View>
          <View style={styles.puzzleView}>
            <QuestionContent contentOfQuestion={contentOfQuestion} count={count}/>
            <AnswerContent 
              contentOfAnswer={contentOfAnswer} 
              lessonInfo={lessonInfo}
              setNextQuestion={setNextQuestion}
              count={count}
              heart={heart}
              setHeart={setHeart}
            />
          </View>
        </View>
      )
    }
  }
}

export default Game; 
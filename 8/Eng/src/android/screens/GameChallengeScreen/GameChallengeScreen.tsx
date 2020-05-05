import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'; 
import { Header, Slider } from 'react-native-elements'; 
import { CountDown } from '../../components/CountDown'; 
import { Back } from '../../components/Back'; 
import firebase from 'firebase'; 
import { random } from '../../services'; 
import { QuestionTypeOne } from '../../components/Questions/QuestionTypeOne'; 
import { QuestionTypeTwo } from '../../components/Questions/QuestionTypeTwo'; 
import { QuestionTypeThree } from '../../components/Questions/QuestionTypeThree'; 
import { QuestionTypeFour } from '../../components/Questions/QuestionTypeFour'; 
import { AnswerTypeOne } from '../../components/Answers/AnswerTypeOne';
import { AnswerTypeTwo } from '../../components/Answers/AnswerTypeTwo'; 
import { AnswerTypeThree } from '../../components/Answers/AnswerTypeThree'; 
import { AnswerTypeFour } from '../../components/Answers/AnswerTypeFour'; 
import { Activity } from '../Utils/activity';
import { FalseResult } from '../../components/FalseResult'; 
import styles from './styles'; 

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
  const [timeOut, setTimeOut] = useState(false); 
  const database = firebase.database();

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
    setTimeOut(false);
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
    if(timeOut) {
      setNextQuestion(false); 
    }
  }, [timeOut])

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
    if (!timeOut) {
      let ContentQuestion; 
      if (contentOfQuestion) {
        if (contentOfQuestion.type == '1'){
          ContentQuestion = <QuestionTypeOne 
            content={contentOfQuestion} 
            id={count}
          />
        }
        else if (contentOfQuestion.type == '2') {
          ContentQuestion = <QuestionTypeTwo 
            content={contentOfQuestion}
            id={count}
          />
        }
        else if (contentOfQuestion.type == '3') {
          ContentQuestion = <QuestionTypeThree 
            content={contentOfQuestion}
            id={count}
          />
        }
        else if (contentOfQuestion.type == '4') {
          ContentQuestion = <QuestionTypeFour 
            content={contentOfQuestion}
            id={count}
          />
        } 
      } else {
        ContentQuestion = (<View>
          <Text>Waiting data ...</Text>
        </View>)
      }

      let ContentAnswer; 

      if(contentOfAnswer) {
        if (contentOfAnswer.type == '1'){
          ContentAnswer = <AnswerTypeOne 
            content={contentOfAnswer} 
            lessonInfo={lessonInfo}
            setNextQuestion={setNextQuestion}
            id={count}
          />
        }
        else if (contentOfAnswer.type == '2') {
          ContentAnswer = <AnswerTypeTwo 
            content={contentOfAnswer} 
            lessonInfo={lessonInfo}
            setNextQuestion={setNextQuestion}
            id={count}
          />
        }
        else if (contentOfAnswer.type == '3') {
          ContentAnswer = <AnswerTypeThree 
            content={contentOfAnswer} 
            lessonInfo={lessonInfo}
            setNextQuestion={setNextQuestion}
            id={count}
          />
        }
        else if (contentOfAnswer.type == '4') {
          ContentAnswer = <AnswerTypeFour 
            content={contentOfAnswer} 
            lessonInfo={lessonInfo}
            setNextQuestion={setNextQuestion}
            id={count}
          />
        }
      } else {
        ContentAnswer = (<View>
          <Text>Waiting data ...</Text>
        </View>)
      }
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
              minutes={0} 
              seconds={10} 
              id={id}
              setTimeOut={setTimeOut}
            />
          </View>

          <View style={styles.puzzleView}>
            {ContentQuestion}
            {ContentAnswer}
          </View>
        </View>
      )
    } else {
      return (
        <FalseResult 
          navigation={navigation} 
          lessonInfo={lessonInfo}
        />)
    }
  }
}

export default Game; 
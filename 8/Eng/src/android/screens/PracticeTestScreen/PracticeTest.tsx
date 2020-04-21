import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Header } from 'react-native-elements'; 
import { Back } from '../../components/Back'; 
import styles from './styles'; 
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
import { AskQuestionNumber } from '../../components/AskQuestionNumber'; 

const Practice = (props: {route?: any; navigation?: any}) => {
  const { route, navigation } = props;  
  const lessonInfo = route.params; 
  const [wait, setWait] = useState(true); 
  const [amountOfQuestion, setAmountOfQ] = useState(0); 
  const [contentOfQuestion, setContentOfQ] = useState({type: ''}); 
  const [contentOfAnswer, setContentOfA] = useState({type: ''}); 

  let questionNumber = 0; 
  
  useEffect(() => {
    setAmountOfQ(0); 
    setWait(false); 
  }, [lessonInfo])

  useEffect(() => {
    if (amountOfQuestion > 0) {
      const database = firebase.database(); 
      questionNumber = random(0, 19); 
      // console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
      // console.log(questionNumber)
      // console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
      const question = database.ref('/topic_detail/' + 
      lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
      '/questions/' + questionNumber); 
      question.on('value', function(snapshot: any){
        // console.log(snapshot.val()); 
        setContentOfQ(snapshot.val()); 
      }); 
      const answer = database.ref('/topic_detail/' + 
      lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
      '/answers/' + questionNumber); 
      answer.on('value', function(snapshot: any){ 
        // console.log(snapshot.val()); 
        setContentOfA(snapshot.val()); 
      })
    }
  }, [amountOfQuestion])

  if(wait) {
    return (
      <View>
        <Text>Waiting data ...</Text>
      </View>
    )
  } else {
    if (amountOfQuestion === 0){
      return (
        <AskQuestionNumber setQuestionNumber={setAmountOfQ} />
      )
    }
    else {
      // const ContentQuestion  = () => {
      let ContentQuestion; 
      if (contentOfQuestion) {
        if (contentOfQuestion.type == '1'){
          ContentQuestion = <QuestionTypeOne content={contentOfQuestion}/>
        }
        else if (contentOfQuestion.type == '2') {
          ContentQuestion = <QuestionTypeTwo content={contentOfQuestion}/>
        }
        else if (contentOfQuestion.type == '3') {
          ContentQuestion = <QuestionTypeThree content={contentOfQuestion}/>
        }
        else if (contentOfQuestion.type == '4') {
          ContentQuestion = <QuestionTypeFour content={contentOfQuestion}/>
        } 
      } else {
        ContentQuestion = (<View>
          <Text>Waiting data ...</Text>
        </View>)
      }
      // }

      // const ContentAnswer = () => {
      let ContentAnswer; 

      if(contentOfAnswer) {
        if (contentOfAnswer.type == '1'){
          ContentAnswer = <AnswerTypeOne content={contentOfAnswer} lessonInfo={lessonInfo}/>
        }
        else if (contentOfAnswer.type == '2') {
          ContentAnswer = <AnswerTypeTwo content={contentOfAnswer} lessonInfo={lessonInfo}/>
        }
        else if (contentOfAnswer.type == '3') {
          ContentAnswer = <AnswerTypeThree content={contentOfAnswer} lessonInfo={lessonInfo}/>
        }
        else if (contentOfAnswer.type == '4') {
          ContentAnswer = <AnswerTypeFour content={contentOfAnswer} lessonInfo={lessonInfo}/>
        }
      } else {
        ContentAnswer = (<View>
          <Text>Waiting data ...</Text>
        </View>)
      }
      // }

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
            {ContentQuestion}
            {ContentAnswer}
          </View>
        </View>
      )
    }
  }
}

export default Practice; 
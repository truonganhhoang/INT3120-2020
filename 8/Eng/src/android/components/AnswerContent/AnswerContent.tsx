import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { AnswerTypeOne } from '../../components/Answers/AnswerTypeOne';
import { AnswerTypeTwo } from '../../components/Answers/AnswerTypeTwo'; 
import { AnswerTypeThree } from '../../components/Answers/AnswerTypeThree'; 
import { AnswerTypeFour } from '../../components/Answers/AnswerTypeFour'; 

const AnswerContent = (props: { contentOfAnswer?: any, lessonInfo?: any, 
  setNextQuestion?: any, count?: any, setHeart?: any, heart?: any }) => {
  const { contentOfAnswer, lessonInfo, setNextQuestion, count, setHeart, heart } = props; 

  if (contentOfAnswer.type == '1'){
    return <AnswerTypeOne 
      content={contentOfAnswer} 
      lessonInfo={lessonInfo}
      setNextQuestion={setNextQuestion}
      id={count}
      heart={heart}
      setHeart={setHeart}
    />
  }
  else if (contentOfAnswer.type == '2') {
    return <AnswerTypeTwo 
      content={contentOfAnswer} 
      lessonInfo={lessonInfo}
      setNextQuestion={setNextQuestion}
      id={count}
      heart={heart}
      setHeart={setHeart}
    />
  }
  else if (contentOfAnswer.type == '3') {
    return <AnswerTypeThree 
      content={contentOfAnswer} 
      lessonInfo={lessonInfo}
      setNextQuestion={setNextQuestion}
      id={count}
      heart={heart}
      setHeart={setHeart}
    />
  }
  else if (contentOfAnswer.type == '4') {
    return <AnswerTypeFour 
      content={contentOfAnswer} 
      lessonInfo={lessonInfo}
      setNextQuestion={setNextQuestion}
      id={count}
      heart={heart}
      setHeart={setHeart}
    />
  }
  return (
    <View>
      <Text>Sorry! The answer has any problem!</Text>
    </View>
  )
}

export default AnswerContent; 
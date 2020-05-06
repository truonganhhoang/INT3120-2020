import React from 'react'; 
import { View, Text } from 'react-native'; 
import { QuestionTypeOne } from '../../components/Questions/QuestionTypeOne'; 
import { QuestionTypeTwo } from '../../components/Questions/QuestionTypeTwo'; 
import { QuestionTypeThree } from '../../components/Questions/QuestionTypeThree'; 
import { QuestionTypeFour } from '../../components/Questions/QuestionTypeFour'; 


const QuestionContent = (props: { contentOfQuestion?: any; count?: any }) => {
  const { contentOfQuestion, count } = props; 
  if (contentOfQuestion.type == '1'){
    return <QuestionTypeOne content={contentOfQuestion} id={count}/> 
  }
  else if (contentOfQuestion.type == '2') {
    return <QuestionTypeTwo content={contentOfQuestion} id={count}/>
  }
  else if (contentOfQuestion.type == '3') {
    return <QuestionTypeThree content={contentOfQuestion} id={count}/>
  }
  else if (contentOfQuestion.type == '4') {
    return <QuestionTypeFour content={contentOfQuestion} id={count}/>
  }
  return (
    <View>
      <Text>Sorry! The data has any problems.</Text>
    </View>
  )
}

export default QuestionContent; 
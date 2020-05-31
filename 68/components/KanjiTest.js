import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class KanjiTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answerStatus : 'default'
    }
  }
  isUnmount = false; 
  componentWillUnmount = ()=>{
    this.isUnmount = true;
  }
  
  render(){
    const { isAnswer, text, nextQuestion } = this.props;
    const {answerStatus} = this.state;
    return (
      <TouchableOpacity onPress={() => {
        if(this.isUnmount === false)
        this.setState({answerStatus: (isAnswer ? ('answerTrue') : ('answerFalse'))});
        setTimeout(() => {
          if (isAnswer) {
            nextQuestion();
          }
          if(this.isUnmount === false)
          this.setState({answerStatus :'default'});
        }, 700);
      }}
      >
        <View style={{ ...styles.container, ...styles[answerStatus] }}>
          <Text style={(answerStatus === 'answerTrue' ? styles.textAnswerTrue : styles.text)}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    height: 80,
    width: 166,
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 2
  },
  default: {
    backgroundColor: 'white',
  },
  answerTrue: {
    backgroundColor: '#006265',
  },
  answerFalse: {
    backgroundColor: 'red',
  },
  textAnswerTrue: {
    color: 'white',
    fontSize: 35,
  },
  text: {
    color: '#006265',
    fontSize: 35,
  }
});

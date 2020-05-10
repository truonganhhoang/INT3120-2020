import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function KanjiTest({ isAnswer, text, nextQuestion }) {
  const [answerStatus, setAnswerStatus] = useState('default');
  return (
    <TouchableOpacity onPress={() => {
      setAnswerStatus(isAnswer ? ('answerTrue') : ('answerFalse'));
      setTimeout(() => {
        if (isAnswer) {
          nextQuestion();
        }
        setAnswerStatus('default');
      }, 700);
    }}
    >
      <View style={{ ...styles.container, ...styles[answerStatus] }}>
        <Text style={(answerStatus === 'answerTrue' ? styles.textAnswerTrue : styles.text)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
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

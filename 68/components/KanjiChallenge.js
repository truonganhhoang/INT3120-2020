import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function KanjiChallenge({ kanji, isAnswer, setTrueQuestion }) {
  const [status, setStatus] = useState('default');
  return (
    <TouchableOpacity
      onPress={() => {
        if (isAnswer) {
          setStatus('blue');
        } else {
          setStatus('red');
        }
        setTimeout(() => { setStatus('default'); setTrueQuestion(); }, 300);
      }}
    >
      <View style={styles[status]}>
        <Text style={styles.text}>{kanji}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  red: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    height: 80,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 3
  },
  blue: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    height: 80,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 3
  },
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 3
  },
  text: {
    color: '#006265',
    fontSize: 20,
  }
});

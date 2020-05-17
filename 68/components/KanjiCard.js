import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


export default function KanjiCard(props) {
  const { onPress } = props;
  const { kanjiText } = props;
  const { hantu } = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{kanjiText}</Text>
        <Text style={styles.titleSmall}>{hantu}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 107,
    height: 150,
    backgroundColor: 'white',
    margin: 6,
    elevation: 3
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: '#006265'
  },
  titleSmall: {
    textAlign: 'center',
    color: 'rgb(170, 170, 170)'
  }
});

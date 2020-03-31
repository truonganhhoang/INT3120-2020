import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import questionImage from '../assets/question.png';

export default function Card(props) {
  const {card} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        Alert.alert('clicked!');
      }}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{card.text}</Text>
        <Image style={styles.cardImage} source={questionImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 20,
    marginBottom: 10,
  },
  cardImage: {
    width: 64,
    height: 64,
  },
  cardText: {
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});

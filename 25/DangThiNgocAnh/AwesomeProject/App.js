import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>
        Hello World!!!
      </Text>
      <Text style={styles.white}>
        My name is Anh
      </Text>
      <Text style={styles.white}>
        This is my first app !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#FFF',
  },
});

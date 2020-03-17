import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>
       Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
});

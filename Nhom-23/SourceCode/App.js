import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './Components/TabBar'


export default function App() {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    flex: 1
  }
});

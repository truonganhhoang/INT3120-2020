import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Courses from './screens/Courses' ;
import ListWord from './screens/ListWords';

export default function App() {
  return (
    <View style={styles.container}>
      
        {/* <Courses/> */}
        <ListWord/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

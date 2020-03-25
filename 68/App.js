import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem'
export default function App() {
  return (
    <View style={styles.container}>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});

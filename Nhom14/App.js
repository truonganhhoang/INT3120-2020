import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle} >
        <Text style={styles.textTitle}>THI TOEIC - TLAT</Text>
      </View>
      
      <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d6d9',
    alignItems: 'center',
  },
  scrollview:{
    width: '100%',
    paddingLeft:16,
    paddingRight:16
  },
  viewTitle: {
    width:'100%',
    paddingTop:50,
    paddingBottom:20,
    backgroundColor: '#0c87cf',
    alignItems:'center'
  },
  textTitle: {
    textTransform: 'uppercase',
    fontSize: 20,
    color:'white'
  }
});

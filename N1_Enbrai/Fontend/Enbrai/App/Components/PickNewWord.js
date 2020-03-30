import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from './CustomHeaderPicker';
import NewWordCard from './NewWordCard'
import { Card, Text, Icon, Button } from 'react-native-elements'

const data = [
  {
    id: '1',
    word: 'relationship',
    meaning: 'mối quan hệ'
  },
  {
    id: '2',
    word: 'come',
    meaning: 'đến'
  }
]

const PickNewWord = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#009dd6' barStyle='light-content'></StatusBar>
      <CustomHeader />
      <LinearGradient
        style={styles.linearGradient}
        colors={['#00a8d4', '#39D57F']}
      >
        <View style={{ flex: 9 }}>
          <FlatList
            data={data}
            renderItem={(item) => <NewWordCard word={item.word} meaning={item.meaning}></NewWordCard>}
            keyExtractor={item => item.id}
            horizontal={true}
          ></FlatList>
        </View>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: '#e7e7e7', fontSize: 16, marginRight: 5 }}>Đã chọn 6 chủ đề</Text>
            <Icon name='edit' color='#e7e7e7' />
          </View>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: '#e7e7e7', fontSize: 14, marginRight: 5 }}>Từ vựng IELTS; Từ vựng TOEIC</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default PickNewWord;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
})
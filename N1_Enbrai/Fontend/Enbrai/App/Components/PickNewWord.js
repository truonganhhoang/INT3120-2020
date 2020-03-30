import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, FlatList, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from './CustomHeaderPicker';
import NewWordCard from './NewWordCard'
import { Card, Text, Icon, Button } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  },
  {
    id: '3',
    word: 'go',
    meaning: 'đi'
  },
  {
    id: '4',
    word: 'bye',
    meaning: 'tạm biệt'
  }
]

const PickNewWord = (props) => {
  const [numWord, setNumWord] = useState(0); 

  const updateNumWord = (newNum) => {
    setNumWord(newNum)
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#009dd6' barStyle='light-content'></StatusBar>
      <CustomHeader numWord={numWord} />
      <LinearGradient
        style={styles.linearGradient}
        colors={['#00a8d4', '#39D57F']}
      >
        <View style={{ flex: 9 }}>
          <Carousel
            data={data}
            renderItem={(item, index) => <NewWordCard
              word={item.item.word}
              meaning={item.item.meaning}
              updateNumWord={updateNumWord}
              numWord={numWord}
              navigation={props.navigation}
            ></NewWordCard>}
            layout={'default'}
            sliderWidth={windowWidth}
            itemWidth={windowWidth * 0.75}
          ></Carousel>
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
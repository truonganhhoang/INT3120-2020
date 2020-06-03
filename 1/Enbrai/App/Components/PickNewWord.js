import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, AsyncStorage, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from './CustomHeaderPicker';
import NewWordCard from './NewWordCard'
import { Card, Text, Icon, Button } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'
import firebase from 'react-native-firebase'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const data = [
//   {
//     id: '1',
//     word: 'relationship',
//     meaning: 'mối quan hệ'
//   },
//   {
//     id: '2',
//     word: 'come',
//     meaning: 'đến'
//   },
//   {
//     id: '3',
//     word: 'go',
//     meaning: 'đi'
//   },
//   {
//     id: '4',
//     word: 'bye',
//     meaning: 'tạm biệt'
//   }
// ]

const PickNewWord = (props) => {
  const [topic, setTopic] = useState([])
  const [numTopic, setNumTopic] = useState(0)
  const [numWord, setNumWord] = useState(0);
  const [dataValue, setValue] = useState([])
  const [dataSelect, setDataSelect] = useState([])

  const updateNumWord = (newNum) => {
    setNumWord(newNum)
  } 
  
  const handleChangeDataSelect = (newData) => {
    setDataSelect(newData)
  }
  const shuffleArray = array => {
    var i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    const getTopic = async () => {
      var data = await AsyncStorage.getItem('Topic')
      var JSONdata = JSON.parse(data)
      setTopic(JSONdata)
      var num = numTopic
      JSONdata.map(i => {
        num++
      })
      setNumTopic(num)
    }
    getTopic()

    const fetchData = async() => {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('Data').on('value', (snap) => {
        var data = []
        var sortedData = []
        snap.forEach((child) => {
          var temp = child.val()
          var item = {
            id: temp.id,
            topicId: temp.topic_id,
            word: temp.word,
            wordId: temp.word_id,
            meaning: temp.translation
          }
          data.push(item)
        })
        shuffleArray(data)
        for (let index = 0; index < 16; index++) {
          sortedData.push(data[index])
        }
        setValue(sortedData)
      })
    }

    fetchData()
    return () => {
      setNumTopic(0)
    }
  }, [props])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#0288D1' barStyle='light-content'></StatusBar>
      <CustomHeader numWord={numWord} />
      <LinearGradient
        style={styles.linearGradient}
        colors={['#00a8d4', '#39D57F']}
      >
        <View style={{ flex: 9 }}>
          <Carousel
            data={dataValue}
            renderItem={(item, index) => <NewWordCard
              word={item.item.word}
              meaning={item.item.meaning}
              updateNumWord={updateNumWord}
              numWord={numWord}
              navigation={props.navigation}
              data={dataValue}
              index={item.index}
              dataSelect={dataSelect}
              handleChangeDataSelect={handleChangeDataSelect}
            ></NewWordCard>}
            layout={'default'}
            sliderWidth={windowWidth}
            itemWidth={windowWidth * 0.75}
          ></Carousel>
        </View>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: '#e7e7e7', fontSize: 16, marginRight: 5 }}>{`Đã chọn ${numTopic} chủ đề`}</Text>
            <Icon name='edit' color='#e7e7e7' />
          </View>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'row', width: '70%', justifyContent: 'center' }}>
            {
              topic.map(i => {
                return <Text style={{ color: '#e7e7e7', fontSize: 14, marginRight: 5 }}>{`${i.name}   `}</Text>
              })
            }
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
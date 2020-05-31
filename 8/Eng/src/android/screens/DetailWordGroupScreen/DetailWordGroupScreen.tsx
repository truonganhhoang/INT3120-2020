import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, AsyncStorage } from 'react-native';
import { WordCard } from '../../components/WordCard';
import { MenuButton } from '../../components/Menu';
import { Activity } from '../Utils/activity';
import firebase from 'firebase'; 
import styles from './styles';

const Screen = (props: { navigation?: any; route?: any }) => {
  const { navigation, route } = props;
  const lessonInfo =  route.params;  
  const [data, setData] = useState({status: 'loading'}); 
  const [favoriteWords, setFavoriteWords] = useState({ keys: [""] })
  const getFavoriteWords = async() => {
    try {
      await AsyncStorage.getItem('favoriteWords', (err, result: any) => {
        let data = JSON.parse(result); 
        setFavoriteWords({ keys: Object.keys(data) })
      })
    } catch(error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    console.log('[DetailWordGroupScreen] LessonInfo')
    console.log(lessonInfo)
    console.log('[DetailWordGroupScreen] LessonInfo')
    navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.centerComponent, 
      headerTitleAlign: "center", 
      headerTintColor: "#ff5e00",
    })
    setData({status: 'loading'}); 
    setFavoriteWords({ keys: [''] })
    let database = firebase.database(); 
    let wordsOfLesson = database.ref('/topic_detail/' + 
    lessonInfo.topicName + '/lessons_detail/' + lessonInfo.lessonName)
    wordsOfLesson.on('value', function(snapshot){
      if (snapshot.val()) {
        setData(snapshot.val())
      } else {
        setData({status: 'null'}); 
      }
    }); 
  }, [lessonInfo])

  useEffect(() => {
    if ( favoriteWords.keys[0] === '' ) {
      getFavoriteWords()
    }
  }, [favoriteWords])

  if (data.status === 'loading' || favoriteWords.keys[0] === '') {
    return (
      <Activity />
    )
  } 
  else if (data.status == 'null') {
    return (
      <SafeAreaView>
        <Text>Sorry! The data is not available.</Text>
      </SafeAreaView>
    )
  }
  else {
    const words: any = [];
    let i = 0
    for (let [key, value] of Object.entries(data)) {
      words.push(value); 
      words[i].key = i
      i++
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={words}
          renderItem={({ item }) => {
            if ( favoriteWords.keys.includes(item.en_meaning) ){
              return (
                <WordCard data={item}
                  icon="star"
                  key={item.key}
                  keyW={item.key}
                  lessonInfo={lessonInfo}
                  navigation={navigation}
                />
              )
            }
            else {
              return (
                <WordCard data={item}
                  icon="staro"
                  key={item.key}
                  keyW={item.key}
                  lessonInfo={lessonInfo}
                  navigation={navigation}
                />
              )
            }
          }}
          keyExtractor={ item => item.en_meaning }
        />
      </SafeAreaView>
    )
  }
}

export default Screen; 
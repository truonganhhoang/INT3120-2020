import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { Back } from '../../components/Back';
import { WordCard } from '../../components/WordCard';
import { MenuButton } from '../../components/Menu';
import { Activity } from '../Utils/activity';
import firebase from 'firebase'; 
import styles from './styles';

const Screen = (props: { navigation?: any; route?: any }) => {
  const { navigation, route } = props;
  const lessonInfo =  route.params;  
  const [data, setData] = useState({status: 'loading'}); 
 
  useEffect(() => {
    navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.centerComponent, 
      headerTitleAlign: "center", 
      headerTintColor: "#ff5e00",
    })
    setData({status: 'loading'}); 
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

  if (data.status == 'loading') {
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
    for (let [key, value] of Object.entries(data)) {
      words.push(value); 
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.list}
          data={words}
          renderItem={({ item }) => {
            return (
              <WordCard data={item}
                icon="staro"
                key={item.en_meaning}
              />
            )
          }}
        />
      </SafeAreaView>
    )
  }
}

export default Screen; 
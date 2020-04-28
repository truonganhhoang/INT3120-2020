import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
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
  const [data, setData] = useState({}); 
  console.log(lessonInfo);

  useEffect(() => {
    let database = firebase.database(); 
    let wordsOfLesson = database.ref('/topic_detail/' + 
    lessonInfo.topicName + '/lessons_detail/' + lessonInfo.lessonName)
    wordsOfLesson.on('value', function(snapshot){
      console.log(snapshot.val()); 
      setData(snapshot.val())
    }); 
  }, [lessonInfo])

  if (Object.keys(data).length == 0) {
    return (
      <Activity />
    )
  }
  else {
    const words: any = [];
    for (let [key, value] of Object.entries(data)) {
      words.push(value); 
    }
    
    return (
      <View>
        <Header
          containerStyle={styles.header}
          leftComponent={
            <Back navigation={navigation} color={'#ff5e00'} />
          }
          rightComponent={
            <MenuButton />
          }
          centerComponent={{ text: lessonInfo.lessonName, style: styles.centerComponent }}
        />
        <ScrollView>
          {
            words.map((e: any) =>
              <WordCard data={e}
                icon="staro"
                key={e.en_meaning}
              />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

export default Screen; 
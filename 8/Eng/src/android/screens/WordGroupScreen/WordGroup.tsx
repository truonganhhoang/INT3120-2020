import React, { useEffect, useState } from 'react';
import { Header } from 'react-native-elements';
import { View, ScrollView, Text } from 'react-native';
import { Back } from '../../components/Back';
import { WordGroupCard } from '../../components/WordGroupCard'; 
import firebase from 'firebase'; 
import styles from './styles'; 


const WordGroupScreen = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props; 
  const nameTopic = route.params.nameTopic; 
  const database = firebase.database(); 
  const [lessons, setLessons] = useState({}); 
  const [wait, setWait] = useState(true); 

  useEffect(() => {
    const lessons_db = database.ref('/topic_detail/' + nameTopic + '/lessons'); 
    lessons_db.on('value', function(snapshot: any) {
      setLessons(snapshot.val()); 
      setWait(false)
    });
  }, [nameTopic])

  if (wait) {
    return (
      <View>
        <Text>Waiting data...</Text>
      </View>
    )
  }
  else {
    var index=0;
    const data:any=[];
    Object.keys(lessons).forEach((item,index)=>{
      data.push(lessons[item])
      data[index].wordGroupName=item
    })
    return (
      <View>
        <Header containerStyle={styles.container}
          leftComponent={
            <Back
              navigation={navigation}
            />}
          centerComponent={{ text: nameTopic, style: styles.centerComponent }}
        />
        <ScrollView horizontal={true}>
          {
            data.map( (e: any) =>
              <WordGroupCard data={e} navigation={navigation} key={index++} topic_name={nameTopic}
              />
            )
          }
        </ScrollView>
      </View>
    )
  }
}



export default WordGroupScreen; 
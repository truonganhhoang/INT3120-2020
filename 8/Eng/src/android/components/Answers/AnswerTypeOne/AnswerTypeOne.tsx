import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles'; 

const TypeOne = (props: {content?: any; lessonInfo?: any}) => {
  const { content, lessonInfo } = props; 
  const database = firebase.database(); 
  const result = database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id); 
  const [styleButtonA, setStyleButtonA] = useState({color: 'white', disabled: false}); 
  const [styleButtonB, setStyleButtonB] = useState({color: 'white', disabled: false}); 

  useEffect(() => {
    setStyleButtonA({color: 'white', disabled: false}); 
    setStyleButtonB({color: 'white', disabled: false}); 
  }, [content])

  // console.log(content);   
  // console.log(lessonInfo); 

  const contentAPress = () => {
    result.on('value', function(snapshot: any){
      if (snapshot.val().text == "a") {
        console.log('True'); 
        setStyleButtonA({color: 'green', disabled: true}); 
        setStyleButtonB({color: 'white', disabled: true})
      } else if (snapshot.val().text == "b"){
        console.log('False'); 
        setStyleButtonB({color: 'green', disabled: true}); 
        setStyleButtonA({color: 'red', disabled: true}); 
      }
    })
  }

  const contentBPress = () => {
    result.on('value', function(snapshot: any){
      if (snapshot.val().text == "b") {
        console.log('True'); 
        setStyleButtonB({color: 'green', disabled: true}); 
        setStyleButtonA({color: 'white', disabled: true}); 
      } else if (snapshot.val().text == "a") {
        console.log('False'); 
        setStyleButtonA({color: 'green', disabled: true});
        setStyleButtonB({color: 'red', disabled: true});  
      }
    })
  }

  return (
    <View>
      <Text>Answer Type One</Text>
      <Button 
        title={content.content_a}
        type="outline"
        style={styles.answerA}
        onPress={contentAPress}
        disabled={styleButtonA.disabled}
        buttonStyle={
          {
            backgroundColor: styleButtonA.color
          }
        }
      />
      <Button 
        title={content.content_b}
        type="outline"
        style={styles.answerB}
        onPress={contentBPress}
        disabled={styleButtonB.disabled}
        buttonStyle={
          {
            backgroundColor: styleButtonB.color
          }
        }
      />
    </View>
  )
}

export default TypeOne; 
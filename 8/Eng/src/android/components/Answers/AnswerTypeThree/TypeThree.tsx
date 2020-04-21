import React, {useState, useEffect} from 'react'; 
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles';

const TypeThree = (props: {content?: any; lessonInfo?: any}) => {
  const { content, lessonInfo } = props; 
  const database = firebase.database(); 
  const result =  database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id);
  const [colorAnswerA, setColorAnswerA] = useState('white');
  const [colorAnswerB, setColorAnswerB] = useState('white'); 
  const [colorAnswerC, setColorAnswerC] = useState('white'); 
  const [colorAnswerD, setColorAnswerD] = useState('white'); 
  const [disabled, setDisabled] = useState(false); 

  useEffect(() => {
    setColorAnswerA('white'); 
    setColorAnswerB('white'); 
    setColorAnswerC('white'); 
    setColorAnswerD('white'); 
    setDisabled(false); 
  }, [content])

  function onPress(selected='a') {
    result.on('value', function(snapshot: any){
      if (selected == snapshot.val().text) {
        // xử lý khi chọn đúng 
        if (selected == "a") {
          setColorAnswerA('green'); 
        } else if (selected == "b") {
          setColorAnswerB('green'); 
        } else if (selected == "c") {
          setColorAnswerC('green'); 
        } else if (selected == "d") {
          setColorAnswerD('green'); 
        }
        setDisabled(true); 
      }
      else {
        // xử lý khi chọn sai
        console.log('False'); 
        // đáp án sai tô màu đỏ
        if (selected == "a") {
          setColorAnswerA('red')
        } else if (selected == "b") {
          setColorAnswerB('red')
        } else if (selected == "c") {
          setColorAnswerC('red')
        } else if (selected == "d") {
          setColorAnswerD('red')
        }
        // đáp án đúng tô màu xanh
        if (snapshot.val().text == "a") {
          setColorAnswerA('green')
        } else if (snapshot.val().text == "b") {
          setColorAnswerB('green')
        } else if (snapshot.val().text == "c") {
          setColorAnswerC('green')
        } else if (snapshot.val().text == "d") {
          setColorAnswerD('green')
        }
        setDisabled(true); 
      }
    })
  }

  return (
    <View>
      <Text>Answer Type Three</Text>
      <Button 
        title={content.content_a}
        type="outline"
        onPress={() => onPress('a')}
        disabled={disabled}
        buttonStyle={{backgroundColor: colorAnswerA}}
        titleStyle={styles.text}
      />
      <Button 
        title={content.content_b}
        type="outline"
        onPress={() => onPress('b')}
        disabled={disabled}
        buttonStyle={{backgroundColor: colorAnswerB}}
        titleStyle={styles.text}
      />
      <Button 
        title={content.content_c}
        type="outline"
        onPress={() => onPress('c')}
        disabled={disabled}
        buttonStyle={{backgroundColor: colorAnswerC}}
        titleStyle={styles.text}
      />
      <Button
        title={content.content_d}
        type="outline"
        onPress={() => onPress('d')}
        disabled={disabled}
        buttonStyle={{backgroundColor: colorAnswerD}}
        titleStyle={styles.text}
      />
    </View>
  )
}

export default TypeThree; 
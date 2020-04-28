import React, {useState, useEffect} from 'react'; 
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles';
import Sound from 'react-native-sound'; 

const TypeThree = (props: {content?: any; lessonInfo?: any; setNextQuestion?: any; id?: any }) => {
  const { content, lessonInfo, setNextQuestion, id } = props; 
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
    setNextQuestion(false); 
  }, [id])

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
      }
      setDisabled(true); 
      const speaker = new Sound(snapshot.val().void_uri, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error); 
          return; 
        }
        setTimeout(() => {
          speaker.release(); 
          setNextQuestion(true); 
        }, speaker.getDuration()*1000)
        speaker.play((success) => {
          if (success) {
            console.log('successfully finished playing'); 
          } else {
            console.log('playback failed due to audio decoding errors')
          }
        })
      })
    })
  }

  return (
    <View style={{ flexDirection: 'column',alignItems:"center" }}>
      <View style={[styles.btn]}>
        <Button
          title={content.content_a}
          type="clear"
          onPress={() => onPress('a')}
          disabled={disabled}
          buttonStyle={[styles.button,{ backgroundColor: colorAnswerA,width:120,marginRight:50 }]}
          titleStyle={styles.text}
        />
        <Button
          title={content.content_b}
          type="clear"
          onPress={() => onPress('b')}
          disabled={disabled}
          buttonStyle={[styles.button,{ backgroundColor: colorAnswerB,width:120 }]}
          titleStyle={styles.text}
        />
      </View>
      <View style={[styles.btn]}>
        <Button
          title={content.content_c}
          type="clear"
          onPress={() => onPress('c')}
          disabled={disabled}
          buttonStyle={[styles.button,{backgroundColor: colorAnswerC,width:120,marginRight:50 }]}
          titleStyle={styles.text}
        />
        <Button
          title={content.content_d}
          type="clear"
          onPress={() => onPress('d')}
          disabled={disabled}
          buttonStyle={[styles.button,{ backgroundColor: colorAnswerD,width:120 }]}
          titleStyle={styles.text}
        />
      </View>
    </View>
  )
}

export default TypeThree; 
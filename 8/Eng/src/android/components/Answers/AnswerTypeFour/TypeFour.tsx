import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'; 
import { ListCharacterShow } from '../../../components/ListCharacterShow'; 
import { ListCharacterInput } from '../../../components/ListCharacterInput'; 
import firebase from 'firebase'; 
import Sound from 'react-native-sound'; 

const TypeFour = (props: { content?: any; lessonInfo?: any; setNextQuestion?: any; id?: any }) => {
  const { content, lessonInfo, setNextQuestion, id } = props; 
  const [listCharShow, setListCharShow] = useState([""]); 
  const [colorListChar, setColorListChar] = useState('yellow'); 
  const [disabledListChar, setDisabledListChar] = useState(false); 
  const database = firebase.database(); 
  const result =  database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id);

  useEffect(() => {
    const l = []; 
    for (let i=0; i < content.num_character; i++) {
      l.push(""); 
    }
    setListCharShow(l); 
    setDisabledListChar(false); 
    setNextQuestion(false); 
    setColorListChar('yellow'); 
  }, [id])

  useEffect(() => {
    let size = content.num_character; 
    if(listCharShow[size - 1] !== "" && listCharShow.length == size) {
      // load result
      result.on('value', function(snapshot: any){
        console.log(snapshot.val()); 
        // function checks result
        const textResult = snapshot.val().text; 
        let check_count = 0; 
        for (let i = 0; i < size; i++) {
          if(listCharShow[i] == textResult[i]) {
            check_count++; 
          }
        }
        if (check_count == size) {
          console.log('True')
          setColorListChar('green')
        } else {
          console.log('False')
          setColorListChar('red')
        }
        setDisabledListChar(true)
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
  }, listCharShow)

  return (
    <View style={{alignItems:'center'}}>
      <ListCharacterShow 
        data={listCharShow}
        setListCharShow={setListCharShow}
        color={colorListChar}
        disabled={disabledListChar}
      />
      <ListCharacterInput 
        data={content.sugges_characters}
        listCharShow={listCharShow}
        setListCharShow={setListCharShow}
        disabled={disabledListChar}
      />
    </View>
  )
}

export default TypeFour; 
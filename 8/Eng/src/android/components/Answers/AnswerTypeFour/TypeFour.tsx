import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'; 
import { ListCharacterShow } from '../../../components/ListCharacterShow'; 
import { ListCharacterInput } from '../../../components/ListCharacterInput'; 
import firebase from 'firebase'; 

const TypeFour = (props: { content?: any; lessonInfo?: any }) => {
  const { content, lessonInfo } = props; 
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
  }, [content])

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
      })
    }
  }, listCharShow)

  return (
    <View>
      <Text>Answer Type Four</Text>
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
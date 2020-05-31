import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ListCharacterShow } from '../../../components/ListCharacterShow';
import { ListCharacterInput } from '../../../components/ListCharacterInput';
import firebase from 'firebase';
import Sound from 'react-native-sound';
import { Grid, Row, Col } from 'react-native-easy-grid';

const TypeFour = (props: {
  content?: any; lessonInfo?: any;
  setNextQuestion?: any; id?: any; setHeart?: any; heart?: any
}) => {

  const { content, lessonInfo, setNextQuestion, id, setHeart, heart } = props;
  const [listCharShow, setListCharShow] = useState([""]);
  const [colorListChar, setColorListChar] = useState('#ff5e00');
  const [disabledListChar, setDisabledListChar] = useState(false);
  const [status, setStatus] = useState('loading');
  const database = firebase.database();
  const result = database.ref('/topic_detail/' +
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
    '/results/' + content.id);

  useEffect(() => {
    setStatus('loading')
    let check = 0;
    Object.keys(content).forEach((item, index) => {
      if (item == 'id') check++
      else if (item == 'num_character') check++
      else if (item == 'sugges_characters') check++
    })
    if (check == 3) {
      const l = [];
      for (let i = 0; i < content.num_character; i++) {
        l.push("");
      }
      setListCharShow(l);
      setDisabledListChar(false);
      setNextQuestion(false);
      setColorListChar('#ff5e00');
      setStatus('run')
    }
    else {
      setStatus('null')
    }
  }, [id])

  useEffect(() => {
    let size = content.num_character;
    if (listCharShow[size - 1] !== "" && listCharShow.length == size) {
      // load result
      result.on('value', function (snapshot: any) {
        console.log(snapshot.val());
        // function checks result
        const textResult = snapshot.val().text;
        let check_count = 0;
        for (let i = 0; i < size; i++) {
          if (listCharShow[i] == textResult[i]) {
            check_count++;
          }
        }
        if (check_count == size) {
          console.log('True')
          setColorListChar('green')
        } else {
          console.log('False')
          setColorListChar('red')
          setHeart(heart - 1)
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
          }, speaker.getDuration() * 1000)

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
  }, [listCharShow])

  useEffect(() => {
    if (status == null) {
      setTimeout(() => {
        setNextQuestion(true);
      }, 3000)
    }
  }, [status])

  if (status == 'loading') {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Waiting answer...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Sorry! The data is not Ready.</Text>
      </View>
    )
  }
  else {
    return (
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid>
          <Row>
            <Col style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <ListCharacterShow
                data={listCharShow}
                setListCharShow={setListCharShow}
                color={colorListChar}
                disabled={disabledListChar}
              /></Col>
          </Row>
          <Row>
            <Col style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <ListCharacterInput
                data={content.sugges_characters}
                listCharShow={listCharShow}
                setListCharShow={setListCharShow}
                disabled={disabledListChar}
              />
            </Col>
          </Row>
        </Grid>
      </SafeAreaView>
    )
  }
}

export default TypeFour; 
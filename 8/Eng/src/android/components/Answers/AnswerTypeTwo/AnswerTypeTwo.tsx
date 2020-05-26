import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { Image, Card } from 'react-native-elements';
import firebase from 'firebase';
import styles from './styles';
import Sound from 'react-native-sound';
import { Col, Row, Grid } from "react-native-easy-grid";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const AnswerTypeTwo = (props: {
  content?: any; lessonInfo?: any;
  setNextQuestion?: any; id?: any; heart?: any; setHeart?: any
}) => {
  const { content, lessonInfo, setNextQuestion, id, heart, setHeart } = props;
  const database = firebase.database();
  const result = database.ref('/topic_detail/' +
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
    '/results/' + content.id);
  const [backgrounColor1, setBackgroundColor1] = useState({ color: '#FFF', opacity: 0 });
  const [backgrounColor2, setBackgroundColor2] = useState({ color: '#FFF', opacity: 0 });
  const [backgrounColor3, setBackgroundColor3] = useState({ color: '#FFF', opacity: 0 });
  const [backgrounColor4, setBackgroundColor4] = useState({ color: '#FFF', opacity: 0 });
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    console.log('type' + 2)
    setStatus('loading');
    let check = 0;
    Object.keys(content).forEach((item, index) => {
      if (item == 'id') check++
      else if (item == 'content_a') check++
      else if (item == 'content_b') check++
      else if (item == 'content_c') check++
      else if (item == 'content_d') check++
    })
    if (check == 5) {
      setNextQuestion(false);
      setBackgroundColor1({ color: '#FFF', opacity: 0 });
      setBackgroundColor2({ color: '#FFF', opacity: 0 });
      setBackgroundColor3({ color: '#FFF', opacity: 0 });
      setBackgroundColor4({ color: '#FFF', opacity: 0 });
      setStatus('run');
    } else {
      setStatus('null');
    }
  }, [id])

  useEffect(() => {
    if (status == null) {
      setTimeout(() => {
        setNextQuestion(true);
      }, 3000)
    }
  }, [status])

  function onPress(selected: any, id: number) {
    // console.log(selected); 
    result.on('value', function (snapshot: any) {
      // console.log(snapshot); 
      if (snapshot.val().text == selected) {
        switch (id) {
          case 1:
            setBackgroundColor1({ color: '#80e27e', opacity: 0.6 });
            break;
          case 2:
            setBackgroundColor2({ color: '#80e27e', opacity: 0.6 });
            break;
          case 3:
            setBackgroundColor3({ color: '#80e27e', opacity: 0.6 });
            break;
          case 4:
            setBackgroundColor4({ color: '#80e27e', opacity: 0.6 });
            break;
          default:
            break;
        }
      } else {
        switch (id) {
          case 1:
            setBackgroundColor1({ color: '#F44336', opacity: 0.6 });
            break;
          case 2:
            setBackgroundColor2({ color: '#F44336', opacity: 0.6 });
            break;
          case 3:
            setBackgroundColor3({ color: '#F44336', opacity: 0.6 });
            break;
          case 4:
            setBackgroundColor4({ color: '#F44336', opacity: 0.6 });
            break;
          default:
            break;
        }
        switch (snapshot.val().text) {
          case 'a':
            setBackgroundColor1({ color: '#80e27e', opacity: 0.6 });
            break;
          case 'b':
            setBackgroundColor2({ color: '#80e27e', opacity: 0.6 });
            break;
          case 'c':
            setBackgroundColor3({ color: '#80e27e', opacity: 0.6 });
            break;
          case 'd':
            setBackgroundColor4({ color: '#80e27e', opacity: 0.6 });
            break;
          default:
            break;
        }
        setHeart(heart - 1)
      }
      // speaker
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

  if (status == 'loading') {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Waiting answer...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sorry! The data is not Ready.</Text>
      </View>
    )
  }
  else {
    return (
      <Grid>
        <Row>
          <Col style={{padding:'2%'}}>
            <View>
              <TouchableOpacity
                style={styles.view_a}
                onPress={() => onPress('a', 1)}
              >
                <Image
                  source={{ uri: content.content_a }}
                  containerStyle={styles.image}
                />
                <View style={{ backgroundColor: backgrounColor1.color, width: '100%', height: '100%', position: 'absolute', opacity: backgrounColor1.opacity, zIndex: 1 }}>
                </View>
              </TouchableOpacity>
            </View>
          </Col>
          <Col style={{padding:'2%'}}>
            <View>
              <TouchableOpacity
                style={styles.view_b}
                onPress={() => onPress('b', 2)}
              >
                <Image
                  source={{ uri: content.content_b }}
                  style={styles.image}
                />
                <View style={{ backgroundColor: backgrounColor2.color, width: '100%', height: '100%', position: 'absolute', opacity: backgrounColor1.opacity, zIndex: 1 }}>
                </View>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
        <Row>
          <Col style={{padding:'2%'}}>
            <View style={{ flex: 1, }}>
              <TouchableOpacity
                style={styles.view_c}
                onPress={() => onPress('c', 3)}
              >
                <Image
                  source={{ uri: content.content_c }}
                  style={styles.image}
                />
                <View style={{ backgroundColor: backgrounColor3.color, width: '100%', height: '100%', position: 'absolute', opacity: backgrounColor3.opacity, zIndex: 1 }}>
                </View>
              </TouchableOpacity>
            </View>
          </Col>
          <Col style={{padding:'2%'}}>
            <View style={{ flex: 1, }}>
              <TouchableOpacity
                style={styles.view_d}
                onPress={() => onPress('d', 4)}
              >
                <Image
                  source={{ uri: content.content_d }}
                  style={styles.image}
                />
                <View style={{ backgroundColor: backgrounColor4.color, width: '100%', height: '100%', position: 'absolute', opacity: backgrounColor4.opacity, zIndex: 1 }}>
                </View>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default AnswerTypeTwo; 
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Image, Icon, Card } from 'react-native-elements';
import styles from './styles';
import Sound from 'react-native-sound';
import layout from '../../../../android/constants/layout';
import { Grid, Row, Col } from 'react-native-easy-grid';
const HEIGHT = layout.window.height;
const WIDTH = layout.window.width;
const TypeFour = (props: { content?: any; id?: any }) => {
  const { content, id } = props;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let check = 0;
    setStatus('loading')
    Object.keys(content).forEach((item, index) => {
      if (item == 'void_uri') check++
      else if (item == 'img_content') check++
    })
    if (check == 2) {
      // const speaker = new Sound(content.void_uri, Sound.MAIN_BUNDLE, (error) => {
      //   if (error) {
      //     console.log('failed to load the sound', error); 
      //     return; 
      //   }
      //   speaker.play((success) => {
      //     if (success) {
      //       console.log('successfully finished playing'); 
      //     } else {
      //       console.log('playback failed due to audio decoding errors')
      //     }
      //   })
      // })
      // speaker.release(); 
      setStatus('run')
    } else {
      setStatus('null')
    }
  }, [id])

  const onPress = () => {
    const speaker = new Sound(content.void_uri, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      speaker.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    })
    speaker.release();
  }

  if (status == 'loading') {
    return (
      <View style={styles.container}>
        <Text>Waiting question...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={styles.container}>
        <Text>Sorry! The Question is not ready.</Text>
      </View>
    )
  }
  else {
    return (
      <Grid style={{ padding: '2%' }}>
        <Row size={70} style={{ justifyContent: 'center', alignItems: 'center',marginBottom:'10%' }}>
          <Image
            source={{ uri: content.img_content }}
            style={styles.image}
          />
        </Row>
        <Row size={30} style={{ justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              borderWidth: 1,
              borderColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
              width: WIDTH * 0.15,
              height: WIDTH * 0.15,
              backgroundColor: '#f57f17',
              borderRadius: WIDTH * 0.15 / 2,
            }}
          >
            <Icon
              name="volume-up"
              type="font-awesome"
              iconStyle={{ fontSize: 30, color: '#FFF' }}
              style={styles.speak}
            />
          </TouchableOpacity>
        </Row>
      </Grid>
    )
  }
}

export default TypeFour; 
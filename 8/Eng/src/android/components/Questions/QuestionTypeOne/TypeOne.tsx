import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Sound from 'react-native-sound';
import layout from '../../../../android/constants/layout';
const HEIGHT = layout.window.height;
import styles from './styles';

const TypeOne = (props: { content?: any; id?: any }) => {
  const { content, id } = props;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let check = 0;
    setStatus('loading')
    Object.keys(content).forEach((item, index) => {
      if (item == 'void_uri') check++
      else if (item == 'txt_content') check++
    })
    if (check == 2) {
      setStatus('run');
    } else {
      setStatus('null');
    }
    // if (content.type == '1') {
    //   const speaker = new Sound(content.void_uri, Sound.MAIN_BUNDLE, (error) => {
    //     if (error) {
    //       console.log('failed to load the sound', error); 
    //       return; 
    //     }
    //     speaker.play((success) => {
    //       if (success) {
    //         console.log('successfully finished playing'); 
    //       } else {
    //         console.log('playback failed due to audio decoding errors')
    //       }
    //     })
    //   })
    //   speaker.release(); 
    // }
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
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Text>Waiting question...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Text>Sorry! The Question is not ready.</Text>
      </View>
    )
  }
  else {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT / 2 }}>
        <Text style={{ fontSize: 40, color: '#f57f17' }}>{content.txt_content}</Text>
        <View style={{ backgroundColor: '#f57f17', width: 70, padding: 20, borderRadius: 100, marginTop: HEIGHT * 0.05 }}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="volume-up"
              type="font-awesome"
              style={styles.speak}
              iconStyle={{ color: '#FFF', fontSize: 30 }}
            />
          </TouchableOpacity >
        </View>
      </View>
    )
  }
}

export default TypeOne; 
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Sound from 'react-native-sound';

import styles from './styles';
import { TouchableOpacity } from 'react-native';

const TypeOne = (props: { content?: any }) => {

  const { content } = props;

  useEffect(() => {
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
  }, [])

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
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:50 }}>
      <Text style={{ fontSize: 40, color: '#f57f17' }}>{content.txt_content}</Text>
      <Text>{content.f_void_uri}</Text>
      <View style={{ backgroundColor: '#f57f17', width: 70, padding: 20, borderRadius: 100,marginTop:50 }}>
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

export default TypeOne; 
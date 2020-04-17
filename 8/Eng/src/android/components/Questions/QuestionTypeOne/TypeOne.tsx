import React, { useEffect } from 'react';
import { View, Text } from 'react-native'; 
import { Button, Icon } from 'react-native-elements'; 
import Sound from 'react-native-sound';

import styles from './styles'; 

const TypeOne = (props: {content?: any}) => {

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

  // console.log(content); 

  return (
    <View>
      <Text>Question Type One</Text>
      <Text>{content.txt_content}</Text>
      <Text>{content.f_void_uri}</Text>
      <Button 
        icon={<Icon 
          name="volume-up"
          type="font-awesome"
          style={styles.speak}
        />}
        onPress={onPress}
      />
    </View>
  )
}

export default TypeOne; 
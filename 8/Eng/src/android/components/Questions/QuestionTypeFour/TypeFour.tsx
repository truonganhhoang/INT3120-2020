import React, { useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Image, Button, Icon } from 'react-native-elements'; 
import styles from './styles'; 
import Sound from 'react-native-sound'; 

const TypeFour = (props: { content?: any }) => {
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
    <View>
      <Text>Question Type 4</Text>
      <Image 
        source={{ uri: content.img_content }}
        style={styles.image}
      />
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

export default TypeFour; 
import React, { useEffect } from 'react'; 
import { View, TouchableOpacity } from 'react-native'; 
import { Image, Icon, Card } from 'react-native-elements'; 
import styles from './styles'; 
import Sound from 'react-native-sound'; 

const TypeFour = (props: { content?: any; id?: any }) => {
  const { content, id } = props; 

  useEffect(() => {
    // if (content.type == '4') {
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

  return (
    <View style={styles.container}>
      <Card containerStyle={{ marginBottom: 50 }}>
        <Image
          source={{ uri: content.img_content }}
          style={styles.image}
        />
      </Card>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          borderColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 80,
          backgroundColor: '#f57f17',
          borderRadius: 50,
        }}
      >
        <Icon
          name="volume-up"
          type="font-awesome"
          iconStyle={{fontSize:50,color:'#FFF'}}
          style={styles.speak}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TypeFour; 
import React, { useEffect, useState } from 'react'; 
import { View, TouchableOpacity, Text } from 'react-native'; 
import { Image, Icon, Card } from 'react-native-elements'; 
import styles from './styles'; 
import Sound from 'react-native-sound'; 

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
    if ( check == 2 ) {
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
  else if (status == 'null'){
    return (
      <View style={styles.container}>
        <Text>Sorry! The Question is not ready.</Text>
      </View>
    )
  }
  else {
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
}

export default TypeFour; 
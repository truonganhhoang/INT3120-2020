import React, { useState } from 'react'; 
import { Card, Icon, Image } from 'react-native-elements'; 
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native'; 
import styles from './styles'; 
import IconFontAwesome5 from 'react-native-vector-icons/AntDesign';
import Sound from 'react-native-sound';

const Word = (props: {data?: any; icon: any}) => {
  const { data } = props; 
  const { icon } = props;
  const [colorStar, setColorStar] = useState(icon)
  const onPressStar = () => {
    console.log(colorStar)
    if (colorStar == 'star'){
      setColorStar('staro'); 
    } 
    else if (colorStar == 'staro'){
      setColorStar('star'); 
    }
  }

  const onSpeaking = () => {
    const speaker = new Sound(data.void_uri, Sound.MAIN_BUNDLE, (error) => {
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
    <TouchableWithoutFeedback
      onPress={() => {console.log('Go FlipCard')}}
      style={styles.btn}
    >
      <View style={styles.card}>
        <View
          style={styles.left}
        >
          <Image 
            source={{ uri: data.image_uri }}
            style={styles.img}
          />
        </View>
        <View
          style={styles.right}
        >
          <IconFontAwesome5
            name={colorStar}
            color='#ff5e00'
            size={30}
            style={styles.star_icon}
            onPress={onPressStar}
          />
          <Text style={styles.en_text}>
            {data.en_meaning}
          </Text>
          <Text style={styles.spelling_text}>
            {data.spelling}
          </Text>
          <Icon
            name='volume-up'
            color='orange'
            size={30}
            iconStyle={styles.voice_icon}
            onPress={() => onSpeaking()}
          />
          <Text style={styles.vn_text}>
            {data.vn_meaning}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Word; 
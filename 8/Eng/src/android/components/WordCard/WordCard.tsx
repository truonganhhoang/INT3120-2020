import React, { useState } from 'react';
import { Card, Icon, Image } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import IconFontAwesome5 from 'react-native-vector-icons/AntDesign';
import Sound from 'react-native-sound';


const Word = (props: { data?: any; icon: any }) => {
  const { data } = props;
  console.log(data);
  const { icon } = props;
  const [colorStar, setColorStar] = useState(icon)
  const onPressStar = () => {
    if (colorStar == 'star') {
      setColorStar('staro');
    }
    else if (colorStar == 'staro') {
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
    <TouchableOpacity style={styles.btn}>
      <Card
        containerStyle={styles.card}
      >
        <Image
          source={require('../../../../images/cards/food.jpg')}
          style={styles.img}
        />
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
        <TouchableOpacity onPress={() => onSpeaking()}>
          <Icon
            name='volume-up'
            color='orange'
            size={20}
            style={styles.voice_icon}
            iconStyle={{ marginLeft: 120, marginTop: 5 }}

          />
        </TouchableOpacity>
        <Text style={styles.vn_text}>
          {data.vn_meaning}
        </Text>
      </Card>
    </TouchableOpacity>
  )
}

export default Word; 
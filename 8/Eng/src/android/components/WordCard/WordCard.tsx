import React, { useState } from 'react';
import { Icon, Image } from 'react-native-elements';
import { Text, View, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import IconFontAwesome5 from 'react-native-vector-icons/AntDesign';
import Sound from 'react-native-sound';
import { getDataFromStorage, mergeItem, delFavoriteWordFromStorage } from '../../services';

const Word = (props: { data?: any; icon: string; 
  lessonInfo?: any; remove?: any; keyW?: any; navigation?: any }) => {
  const { data, lessonInfo, icon, remove, keyW, navigation } = props;
  const [colorStar, setColorStar] = useState(icon)
  const onPressStar = () => {
    if (colorStar == 'star') {
      setColorStar('staro');
      delFavoriteWordFromStorage(data.en_meaning, remove)
    }
    else if (colorStar == 'staro') {
      setColorStar('star');
      if (lessonInfo) {
        let words = {
          [data.en_meaning]: {
            en_meaning: data.en_meaning,
            image_uri: data.image_uri,
            spelling: data.spelling,
            vn_meaning: data.vn_meaning,
            void_uri: data.void_uri,
            lesson: lessonInfo.lessonName,
            topic: lessonInfo.topicName
          }
        }
        mergeItem('favoriteWords', JSON.stringify(words));
        getDataFromStorage('favoriteWords')
      } else {
        console.log('[WordCard] Lesson Info errors for set')
      }
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

  const goFlipCardWord = () => {
    if (navigation) {
      navigation.navigate('FlipCardWord', { topicName: lessonInfo.topicName, 
        lessonName: lessonInfo.lessonName, keyW: keyW });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={goFlipCardWord}>
      <View style={styles.item} onMagicTap={() => {console.log('[Word Card] taps')}}>
        <View style={styles.left}>
          <Image
            source={{ uri: data.image_uri }}
            style={styles.img}
            PlaceholderContent={<ActivityIndicator size="small" color="#ff5e00"/>}
          />
        </View>
        <View style={styles.right}>
          <IconFontAwesome5
            name={colorStar}
            color='#ff5e00'
            size={20}
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
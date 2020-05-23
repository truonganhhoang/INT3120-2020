import React, { useState } from 'react';
import styles from './styles';
import { Card, Button } from 'react-native-elements';
import IconAntDeisign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getDataFromStorage, mergeItem, delFavoriteLesFromStorage } from '../../services';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const CardWordGroup = (props: { data?: any; navigation?: any, topic_name: any, icon: string }) => {
  const { data, topic_name, icon } = props;
  const { navigation } = props;
  const [colorStar, setColorStar] = useState(icon);
  const changeStar = () => {
    if (colorStar == 'staro') {
      setColorStar('star');
      if (topic_name) {
        let lessons = {
          [data.wordGroupName]: {
            image_les: data.image_les,
            num_word: data.num_word,
            vn_meaning: data.vn_meaning,
            topic_name: topic_name,
            wordGroupName: data.wordGroupName
          }
        }
        mergeItem('favoriteLessons', JSON.stringify(lessons));
        getDataFromStorage('favoriteLessons')
      } else {
        console.log('[WordGroupCard] topic_name errors for set.')
      }
    }
    else if (colorStar == 'star') {
      setColorStar('staro');
      // Handel delele Object
      delFavoriteLesFromStorage(data.wordGroupName);
    }
  };
  const onPress = () => {
    navigation.navigate('DetailWordGroupScreen', { topicName: topic_name, lessonName: data.wordGroupName });
  }
  const onFlipCard = () => {
    navigation.navigate('FlipCardWord', { topicName: topic_name, lessonName: data.wordGroupName });
  };

  const goPracticeTest = () => {
    navigation.navigate('PracticeTestScreen', { topicName: topic_name, lessonName: data.wordGroupName });
  };

  const goGameChallenge = () => {
    navigation.navigate('GameChallengeScreen', { topicName: topic_name, lessonName: data.wordGroupName });
  }

  return (
    <View style={styles.containers}>
      <View style={styles.viewCard}>
        <Card containerStyle={styles.card}>
          <View style={styles.viewImg}>
            <IconAntDeisign
              name={colorStar}
              color='#ff5e00'
              size={25}
              style={{ position: 'absolute', top: 0, zIndex: 1, left: 0 }}
              onPress={changeStar}
            />
            <Image
              source={{ uri: data.image_les }}
              style={styles.img}
            />
          </View>
          <View>
            <Text style={styles.textWordGroupName}>
              {data.wordGroupName}
            </Text>
            <Text style={styles.textVnMeaning}>
              {data.vn_meaning}
            </Text>
            <Text style={styles.textExplain}>
              Giúp bạn nắm vững {data.num_word} từ liên quan đến
             <Text style={{ fontStyle: 'italic', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 15 }}> {data.vn_meaning}</Text> trong tiếng anh
          </Text>
          </View>
        </Card>
      </View>
      <View style={styles.viewTool}>
        {/* <View style={styles.viewIcon}> */}
        <TouchableOpacity style={styles.viewIcon} onPress={onFlipCard}>
          <IconFeather
            style={styles.iconTool}
            name='copy'
          />
        </TouchableOpacity>
        {/* </View> */}
        <View style={{ borderWidth: 0.25, borderColor: 'white', width: 25, marginTop: 3, marginBottom: 5 }}></View>
        <TouchableOpacity style={styles.viewIcon} onPress={goPracticeTest}>
          <IconFeather
            style={styles.iconTool}
            name='edit'
          />
        </TouchableOpacity>
        <View style={{ borderWidth: 0.25, borderColor: 'white', width: 25, marginTop: 3, marginBottom: 5 }}></View>
        <TouchableOpacity style={styles.viewIcon} onPress={goGameChallenge}>
          <IconFontAwesome5
            style={styles.iconTool}
            name='medal'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnDetail}
          containerStyle={styles.btnDetail}
          title='CHI TIẾT'
          onPress={onPress}
        />
      </View>
    </View>
  )
}

export default CardWordGroup; 
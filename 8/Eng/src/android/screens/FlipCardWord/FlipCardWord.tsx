import React, { useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard';
import styles from './styles';
import MenuButton from '../../components/Menu/Menu';
import firebase from 'firebase';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, Text, SafeAreaView, AsyncStorage } from 'react-native';
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
import { Activity } from '../Utils/activity';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const FlipCardWord = (props: { navigation?: any, route?: any }) => {
  const { navigation, route } = props;
  const lessonInfo = route.params;
  const listWords: any = [];
  const database = firebase.database();
  const wordsOfLesson = database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/lessons_detail/' + lessonInfo.lessonName); 
  const [Data, setData] = useState({ status: 'loading' });
  const [state, setState] = useState(lessonInfo.keyW);
  const [favoriteWords, setFavoriteWords] = useState({ keys: [""] })
  const getFavoriteWords = async() => {
    try {
      await AsyncStorage.getItem('favoriteWords', (err, result: any) => {
        let data = JSON.parse(result); 
        setFavoriteWords({ keys: Object.keys(data) })
        console.log( '[Flip Card Word]')
        console.log(Object.keys(data))
        console.log( '[Flip Card Word]')
      })
    } catch(error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    setData({ status: 'loading' })
    setFavoriteWords({ keys: [''] })
    setState(lessonInfo.keyW)
    wordsOfLesson.on('value', function (snapshot: any) {
      if (snapshot.val()) {
        setData(snapshot.val());
      } else {
        setData({ status: 'null' })
      }
    });
  }, [lessonInfo])
  //get value people

  useEffect(() => {
    if ( favoriteWords.keys[0] === '' ) {
      console.log('[Flip Card Word] favorite Words')
      getFavoriteWords()
    }
  }, [favoriteWords])

  if (Data.status === 'loading') {
	navigation.setOptions({headerTransparent: true, title: ""})
    return (
      <Activity />
    )
  } 
  else if (Data.status === 'null') {
	navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.centerComponent, 
      headerTransparent: true,
      headerTitleAlign: "center", 
      headerTintColor: "white",
      // headerRightContainerStyle: { marginTop: 5, padding: 16 },
      // headerRight: () => { return (<MenuButton />) }
    })
    return (
      <SafeAreaView style={{ backgroundColor: '#E65100', paddingTop: 60 }}>
        <View style={{ backgroundColor: 'white'}}>
          <Text>Sorry! The data is not available.</Text>
        </View>
      </SafeAreaView>
    )
  }
  else {
	  navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.centerComponent, 
      headerTransparent: true,
      headerTitleAlign: "center", 
      headerTintColor: "white",
      // headerRightContainerStyle: { marginTop: 5, padding: 16 },
      // headerRight: () => { return (<MenuButton />) }
    })
    let index = 0; 
    for (let [key, value] of Object.entries(Data)) {
      listWords.push(value); 
      listWords[index].word_name = key; 
      if (
        favoriteWords.keys.includes(value.en_meaning)
      ){
        listWords[index].icon = 'star'
      } else {
        listWords[index].icon = 'staro'
      }
      index++; 
    }

    const _renderItem = (item: any) => {
      return (
        <FlipCard data={item.item} icon={item.item.icon} lessonInfo={lessonInfo}/>
      )
    }
    return (
      <SafeAreaView style={{ backgroundColor: '#E65100', height: HEIGHT }}>
        <Carousel
          ref={(ref: any)=>ref=ref}
          data={listWords}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setState(index)}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
          firstItem={lessonInfo.keyW}
        />
        <Text style={styles.counter}>
          {state + 1}/{listWords.length}
        </Text>
      </SafeAreaView>
    );
  }
}
export default FlipCardWord;
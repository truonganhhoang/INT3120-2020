import React, { useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard';
import { Header } from 'react-native-elements';
import styles from './styles';
import MenuButton from '../../components/Menu/Menu';
import { Back } from '../../components/Back';
import firebase from 'firebase';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, Text } from 'react-native';
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
  const [state, setState] = useState(0);

  useEffect(() => {
    setData({ status: 'loading' })
    wordsOfLesson.on('value', function (snapshot: any) {
      if (snapshot.val()) {
        setData(snapshot.val());
      } else {
        setData({ status: 'null' })
      }
    });
  }, [lessonInfo])
  //get value people

  if (Data.status == 'loading') {
	navigation.setOptions({headerTransparent: true, title: ""})
    return (
      <Activity />
    )
  } 
  else if (Data.status == 'null') {
	navigation.setOptions({
      title: lessonInfo.lessonName === '' ? 'No title' : lessonInfo.lessonName,
      headerTitleStyle: styles.centerComponent, 
      headerTransparent: true,
      headerTitleAlign: "center", 
      headerTintColor: "white",
      headerRightContainerStyle: { marginTop: 5, padding: 16 },
      headerRight: () => { return (<MenuButton />) }
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
      headerRightContainerStyle: { marginTop: 5, padding: 16 },
      headerRight: () => { return (<MenuButton />) }
    })
    let index = 0; 
    for (let [key, value] of Object.entries(Data)) {
      listWords.push(value); 
      listWords[index++].word_name = key; 
    }

    const _renderItem = (item: any) => {
        return (
            <FlipCard data={item.item} />
        );
    }
    return (
      <View style={{ backgroundColor: '#E65100',height:HEIGHT }}>
        <View>
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
          />
          <Text style={styles.counter}>
            {state + 1}/{listWords.length}
          </Text>
        </View>
      </View>
    );
  }
}
export default FlipCardWord;
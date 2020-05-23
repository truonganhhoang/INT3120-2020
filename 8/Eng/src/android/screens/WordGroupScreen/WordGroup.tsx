import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { WordGroupCard } from '../../components/WordGroupCard';
import firebase from 'firebase';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
import { Activity } from '../Utils/activity';
import { AsyncStorage } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGTH = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEGHT = Math.round(SLIDER_HEIGTH);

const WordGroupScreen = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props;
  const nameTopic = route.params.nameTopic;
  const database = firebase.database();
  const [lessons, setLessons] = useState({ status: 'loading' });
  const [favoriteLesson, setFavoriteLesson] = useState({ keys: [''] });
  const getFavoriteLessons = async () => {
    try {
      await AsyncStorage.getItem('favoriteLessons', (err, result: any) => {
        let data = JSON.parse(result);
        setFavoriteLesson({ keys: Object.keys(data) })
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    navigation.setOptions({
      title: nameTopic === '' ? 'No title' : nameTopic,
      headerTitleStyle: styles.centerComponent,
      headerTitleAlign: "center",
      headerTintColor: "#ff5e00",
    })
    setLessons({ status: 'loading' })
    setFavoriteLesson({ keys: [''] })
    const lessons_db = database.ref('/topic_detail/' + nameTopic + '/lessons');
    lessons_db.on('value', function (snapshot: any) {
      if (snapshot.val()) {
        setLessons(snapshot.val());
      } else {
        setLessons({ status: 'null' });
      }
    });
  }, [nameTopic])

  useEffect(() => {
    if (favoriteLesson.keys[0] === '') {
      getFavoriteLessons();
    }
  }, [favoriteLesson])

  const _renderItem = (item: any) => {
    if (favoriteLesson.keys.includes(item.item.wordGroupName)) {
      console.log('[WordGroupScreen] favorite lesson')
      console.log(item.item.wordGroupName)
      return (
        <WordGroupCard data={item.item}
          navigation={navigation} key={index++}
          topic_name={nameTopic} icon="star"
        />
      )
    } else {
      return (
        <WordGroupCard data={item.item}
          navigation={navigation} key={index++}
          topic_name={nameTopic} icon="staro"
        />
      );
    }
  }
  if (lessons.status === 'loading' || favoriteLesson.keys[0] === '') {
    return (
      <Activity />
    )
  }
  else if (lessons.status === 'null') {
    return (
      <View style={styles.containers}>
        <View>
          <Text>Sorry! The data is not available.</Text>
        </View>
      </View>
    )
  }
  else {
    var index = 0;
    const data: any = [];
    let i = 0;
    for (let [key, value] of Object.entries(lessons)) {
      data.push(value);
      data[i++].wordGroupName = key
    }
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <Grid>
          <Row>
            <Carousel
              ref={(ref: any) => ref = ref}
              data={data}
              renderItem={_renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              // containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              //onSnapToItem={(index) => setState(index)}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}
            />
          </Row>
        </Grid>
      </SafeAreaView>
      // <View style={styles.containers}>
      //   <View style={{top:ITEM_HEGHT*0.1}}>
      //     <Carousel
      //       ref={(ref: any) => ref = ref}
      //       data={data}
      //       renderItem={_renderItem}
      //       sliderWidth={SLIDER_WIDTH}
      //       itemWidth={ITEM_WIDTH}
      //       // containerCustomStyle={styles.carouselContainer}
      //       inactiveSlideShift={0}
      //       //onSnapToItem={(index) => setState(index)}
      //       scrollInterpolator={scrollInterpolator}
      //       slideInterpolatedStyle={animatedStyles}
      //       useScrollView={true}
      //     />
      //   </View>
      // </View>
    )
  }
}



export default WordGroupScreen; 
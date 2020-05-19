import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { WordGroupCard } from '../../components/WordGroupCard';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import firebase from 'firebase';
import Activity from '../Utils/activity/Activity';
import { getTobeHandleFromStorage } from '../../services'; 
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const Lessons = (props: { navigation?: any }) => {
  const { navigation } = props;
  const [wait, setWait] = useState(true);
  const [lessons2, setLesson2] = useState([{topic_name: ''}])

  const updateLesson = (err: any, result: any) => {
    let data = JSON.parse(result)
    let lessons: any = [];
    for (let [key, value] of Object.entries(data)) {
      lessons.push(value); 
    }
    setLesson2(lessons)
    setWait(false)
    console.log('[Favorite Lessons] update favorite')
    console.log(lessons)
  }

  useEffect(() => {
    getTobeHandleFromStorage('favoriteLessons', updateLesson)
  }, [])

  const _renderItem = (item: any) => {
    console.log(item)
    return (
      <WordGroupCard data={item.item} 
        navigation={navigation} key={index++} 
        topic_name={item.item.topic_name} 
        icon='star'
      />
    );
  }

  if (wait) {
    return (
      <Activity />
    )
  }
  else {
    var index = 0;
    if (lessons2.length === 0) {
      return (
        <View>
          <Text style={{ alignSelf: "center", marginTop: 30, fontSize: 15 }}>Bạn chưa có bất cứ bài học nào!</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Carousel
            ref={(ref: any) => ref = ref}
            data={lessons2}
            renderItem={_renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            containerCustomStyle={styles.carouselContainer}
            inactiveSlideShift={0} 
            //onSnapToItem={(index) => setState(index)}
            scrollInterpolator={scrollInterpolator}
            slideInterpolatedStyle={animatedStyles}
            useScrollView={true}
          />
        </View>
      )
    }
  }
}

export default Lessons;
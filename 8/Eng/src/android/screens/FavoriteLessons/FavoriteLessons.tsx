import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { WordGroupCard } from '../../components/WordGroupCard';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import firebase from 'firebase';
import Activity from '../Utils/activity/Activity';
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const Lessons = (props: { navigation?: any }) => {
  const { navigation } = props;
  const nameTopic = 'People';
  const database = firebase.database();
  const [lessons, setLessons] = useState({});
  const [wait, setWait] = useState(true);
  useEffect(() => {
    const lessons_db = database.ref('/topic_detail/' + nameTopic + '/lessons');
    lessons_db.on('value', function (snapshot: any) {
      setLessons(snapshot.val());
      setWait(false)
    });
  }, [nameTopic])
  const _renderItem = (item: any) => {
    return (
      <WordGroupCard data={item.item} navigation={navigation} key={index++} topic_name={nameTopic}></WordGroupCard>
    );
  }
  if (wait) {
    return (
      <Activity />
    )
  }
  else {
    var index = 0;
    const data: any = [];
    if (lessons == null) {
      return (
        <View>
        </View>
      )
    } else {
      Object.keys(lessons).forEach((item, index) => {
        data.push(lessons[item])
        data[index].wordGroupName = item
      })
      return (
        <View>
          <Carousel
            ref={(ref: any) => ref = ref}
            data={data}
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
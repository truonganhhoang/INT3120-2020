import React, { useEffect, useState } from 'react';
import { Header } from 'react-native-elements';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { Back } from '../../components/Back';
import { WordGroupCard } from '../../components/WordGroupCard';
import firebase from 'firebase';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const WordGroupScreen = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props;
  const nameTopic = route.params.nameTopic;
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
      <View>
        <Text>Waiting data...</Text>
      </View>
    )
  }
  else {
    var index = 0;
    const data: any = [];
    Object.keys(lessons).forEach((item, index) => {
      data.push(lessons[item])
      data[index].wordGroupName = item
    })
    return (
      <View style={styles.containers}>
        <Header containerStyle={styles.container}
          leftComponent={
            <Back
              navigation={navigation}
            />}
          centerComponent={{ text: nameTopic, style: styles.centerComponent }}
        />
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
        {/* <ScrollView horizontal={true}>
          {
            data.map( (e: any) =>
              <WordGroupCard data={e} navigation={navigation} key={index++} topic_name={nameTopic}
              />
            )
          }
        </ScrollView> */}
      </View>
    )
  }
}



export default WordGroupScreen; 
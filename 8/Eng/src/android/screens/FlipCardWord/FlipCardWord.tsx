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
    return (
      <Activity />
    )
  } 
  else if (Data.status == 'null') {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          leftComponent={
              <Back navigation={navigation} color={'#fff'} />
          }
          rightComponent={
              <MenuButton />
          }
          centerComponent={{ text: lessonInfo.lessonName, style: styles.centerComponent }}
        />
        <View>
          <Text>Sorry! The data is not available.</Text>
        </View>
      </View>
    )
  }
  else {
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
      <View style={{ backgroundColor: '#E65100' }}>
        <Header
            containerStyle={styles.header}
            leftComponent={
                <Back navigation={navigation} color={'#fff'} />
            }
            rightComponent={
                <MenuButton />
            }
            centerComponent={{ text: lessonInfo.lessonName, style: styles.centerComponent }}
        />
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
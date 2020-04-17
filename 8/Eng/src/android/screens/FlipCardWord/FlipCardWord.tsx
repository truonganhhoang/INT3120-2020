
import React, { useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard';
import { Header } from 'react-native-elements';
import styles from './styles';
import MenuButton from '../../components/Menu/Menu';
import { Back } from '../../components/Back';
import firebase from 'firebase';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { scrollInterpolator, animatedStyles } from '../Utils/animation';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const FlipCardWord = (props: { navigation?: any, route?: any }) => {

    const { navigation, route } = props;
    const { data, topic_name } = route.params;
    const listWords: any = [];
    const database = firebase.database();
    const topic_detail = database.ref('/topic_detail');
    const [Data, setData] = useState({});
    const [state, setState] = useState(0);

    useEffect(() => {
        topic_detail.on('value', function (snapshot: any) {
            setData(snapshot.val());
        });
    }, [])
    //get value people
    Object.keys(Data).forEach((item, index) => {
        if (item == topic_name) {
            //get value lessons_detail
            Object.keys(Data[item].lessons_detail).forEach((item1, index1) => {
                if (data == item1) {
                    Object.keys(Data[item].lessons_detail[item1]).forEach((item2, index2) => {
                        listWords.push(Data[item].lessons_detail[item1][item2])
                        listWords[index2].word_name = item2;
                    })
                }
            })
        }
    });
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
                centerComponent={{ text: 'People', style: styles.centerComponent }}
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
                <Text style={styles.counter}
                >
                    {state + 1}/{listWords.length}
                </Text>
            </View>

        </View>
    );
}
export default FlipCardWord;
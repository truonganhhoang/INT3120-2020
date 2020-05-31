import React, { useState, useEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions } from 'react-native';
import styles from './styles';
import { Card, Image, Icon } from 'react-native-elements';
import IconAntDeisign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sound from 'react-native-sound';
import { getDataFromStorage, mergeItem, delFavoriteWordFromStorage } from '../../services';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
var values = 0;

const FlipCard = (props: { data: any, icon: string, lessonInfo: any }) => {
    const { data, icon, lessonInfo } = props;
    const animatedValue = new Animated.Value(0);
    animatedValue.addListener(({ value }) => {
        values = value;
    })
    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    })
    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })
    const frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
    })
    const frontAnimatedStyle = {
        transform: [
            { rotateX: frontInterpolate }
        ]
    }
    const backAnimatedStyle = {
        transform: [
            { rotateX: backInterpolate }
        ]
    }
    const backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
    })
    const flipCard = () => {
        if (values >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
        }
    }
    const [colorStar, setColorStar] = useState(icon);
    useEffect(() => {
        setColorStar(icon)
    }, [icon])
    const changeFavor = () => {
        if (colorStar == 'staro') {
            setColorStar('star');
            if (lessonInfo) {
                let word = {
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
                mergeItem('favoriteWords', JSON.stringify(word));
                getDataFromStorage('favoriteWords')
            } else {
                console.log('[WordCard] Lesson Info errors for set')
            }
        }
        else if (colorStar == 'star') {
            setColorStar('staro');
            delFavoriteWordFromStorage(data.en_meaning, () => { })
        }
    }

    const [colorLight, setColorLight] = useState("lightbulb-on-outline");
    const changeLight = () => {
        if (colorLight == 'lightbulb-on') {
            setColorLight('lightbulb-on-outline');
        }
        if (colorLight == 'lightbulb-on-outline') {
            setColorLight('lightbulb-on');
        }
    }
    // useEffect(() => {
    //     const speaker = new Sound(data.void_uri, Sound.MAIN_BUNDLE, (error) => {
    //         if (error) {
    //             console.log('failed to load the sound', error);
    //             return;
    //         }
    //         speaker.play((success) => {
    //             if (success) {
    //                 console.log('successfully finished playing');
    //             } else {
    //                 console.log('playback failed due to audio decoding errors')
    //             }
    //         })
    //     })
    // }, []);
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
    return (
        <TouchableWithoutFeedback onPress={flipCard}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: frontOpacity }]}>
                    <View style={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        right: '5%'
                    }}>
                        <IconAntDeisign
                            name={colorStar}
                            color='#ff5e00'
                            size={24}
                            onPress={changeFavor}
                            style={styles.iconStar}
                        />
                    </View>

                    <View style={{ marginTop: '5%', width: '80%', height: '50%' }}>
                        <Image
                            source={{ uri: data.image_uri }}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    <View style={{ marginTop: '40%' }}>
                        <Text style={{ fontWeight: '700', color: '#666' }}>
                            Lật về sau
                        </Text>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: backOpacity }]}>
                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#ff5e00' }}>
                            {data.en_meaning}
                        </Text>
                    </View>
                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Text style={{ color: '#666', fontSize: 25 }}>
                            {data.spelling}
                        </Text>
                    </View>
                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold' }}>
                            {data.vn_meaning}
                        </Text>
                    </View>

                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Ionicons
                            name='ios-volume-high'
                            color='#ff5e00'
                            size={HEIGHT * 0.1}

                            onPress={onSpeaking}
                        />
                    </View>
                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '700', color: '#666' }}>
                            Lật về sau
                        </Text>
                    </View>
                </Animated.View>
                {/* <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: backOpacity }]}>
                    <Text style={{ top: HEIGHT*0.09, fontSize: 30, fontWeight: 'bold', color: '#ff5e00' }}>
                        {data.en_meaning}
                    </Text>
                    <Text style={{ top: HEIGHT*0.09, color: '#666' }}>
                        {data.spelling}
                    </Text>
                    <Text style={{ top: HEIGHT*0.09, marginTop: 50, color: 'blue', fontSize: 20, fontWeight: 'bold' }}>
                        {data.vn_meaning}
                    </Text>

                    <Ionicons
                        name='ios-volume-high'
                        color='red'
                        size={50}
                        style={{ top: HEIGHT*0.09 }}
                        onPress={onSpeaking}
                    />
                    <View style={{ top: HEIGHT*0.14 }}>
                        <Text style={{ fontWeight: '700', color: '#666' }}>
                            Lật về sau
                        </Text>
                    </View>
                </Animated.View> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FlipCard; 
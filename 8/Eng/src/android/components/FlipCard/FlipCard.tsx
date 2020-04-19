import React from 'react';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import styles from './styles';
import { Card, Image, Icon } from 'react-native-elements';
import IconAntDeisign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
var values = 0;
const FlipCard = (props: { data: any }) => {
    const { data } = props;
    console.log(data);
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
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={flipCard}>
                <Card containerStyle={{ borderRadius: 10 }}>
                    <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: frontOpacity }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ marginRight: 6 }}>
                                <MaterialCommunityIcons
                                    name='lightbulb-on-outline'
                                    color='#00badd'
                                    size={25}
                                />
                            </View>
                            <View>
                                <IconAntDeisign
                                    name='staro'
                                    color='#ff5e00'
                                    size={24}
                                />
                            </View>
                        </View>
                        <View style={{}}>
                            <Image
                                source={{ uri: data.image_uri }}
                                resizeMode='contain'
                                style={{ width: WIDTH / 2, height: HEIGHT / 2 - 70 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'column-reverse', marginTop: 30 }}>
                            <Text style={{ fontWeight: '700', color: '#666' }}>
                                Lật về sau
                                </Text>
                        </View>
                    </Animated.View>


                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: backOpacity }]}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ff5e00' }}>
                            {data.en_meaning}
                        </Text>
                        <Text style={{ color: '#666' }}>
                            {data.spelling}
                        </Text>
                        <Text style={{ marginTop: 50, color: 'blue', fontSize: 20, fontWeight: 'bold' }}>
                            {data.vn_meaning}
                        </Text>
                        <View style={{ backgroundColor: '#ff5e00', borderRadius: 100, paddingTop: 8, paddingBottom: 8, paddingLeft: 15, paddingRight: 14, marginTop: 10 }}>
                            <Ionicons
                                name='ios-volume-high'
                                color='#FFF'
                                size={50}
                            />
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'column-reverse', marginTop: 50 }}>
                            <Text style={{ fontWeight: '700', color: '#666' }}>
                                Lật về sau
                                </Text>
                        </View>
                    </Animated.View>
                </Card>
            </TouchableOpacity>
            <View style={{ marginBottom: 100, marginTop: 50 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>
                    1/28
                </Text>
            </View>
        </View>
    )
}

export default FlipCard; 
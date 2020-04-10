import React from 'react';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
var values = 0;
const FlipCard = (props: { data: any }) => {
    const { data } = props;
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
            { rotateY: frontInterpolate }
        ]
    }
    const backAnimatedStyle = {
        transform: [
            { rotateY: backInterpolate }
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

                <View>
                    <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: frontOpacity }]}>
                        <Text style={styles.flipText}>
                            This text is flipping on the front.
            </Text>
                    </Animated.View>
                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: backOpacity }]}>
                        <Text style={styles.flipText}>
                            This text is flipping on the back.
            </Text>
                    </Animated.View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FlipCard; 
import React, { Component } from 'react';
import { Animated, View, Text, Alert } from 'react-native';
import { Easing } from 'react-native-reanimated';


class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // Initial value for opacity: 0
        };
    }

    componentDidMount() {

        Animated.timing(                            // Animate over time
            this.state.fadeAnim,                      // The animated value to drive
            {
                toValue: 200,
                duration: 1000,                  // Animate to opacity: 1, or fully opaque
            }
        ).start();                                  // Starts the animation
    }


    render() {
        const rotate = this.state.fadeAnim.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })
        return (
            <Animated.View                            // Special animatable View
                style={{
                    width: 200,
                    height: this.state.fadeAnim,
                    backgroundColor: "gray",
                    alignItems: "flex-end",
                    // flexDirection: "row",
                    // opacity: this.state.fadeAnim,
                    // transform: [{
                    //     rotate: rotate,
                    // }]          // Bind opacity to animated value

                }}
            >
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>
                <Text> Phạm Danh Chiến </Text>

            </Animated.View>
        );
    }
}



export function Anima() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FadeInView title='hihi' />
        </View>
    )
}
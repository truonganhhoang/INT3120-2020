import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/ReviewTabStyles'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

class ReviewTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>XEM LẠI</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 4 / 10 }} >
                        <ImageBackground
                            source={require('../Images/review.jpg')}
                            style={{ flex: 1 }}
                            >
                        </ImageBackground>
                    </View>
                    <View style={{ flex: 6 / 10 }}>
                        <View style={{ position: 'absolute', top: -70, left: 0, right: 0, bottom: 0, margin: 20 }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center' }}>
                                    <Animatable.View delay={200} animation='bounceInLeft' style={styles.view}>
                                        <TouchableOpacity
                                            onPress={() => { }} style={{ padding: 20 }}>
                                            <Icon name="heart" color="#616161" size={30} style={styles.icon} />
                                            <Text style={styles.text}>Câu yêu thích</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                    <Animatable.View delay={200} animation='bounceInRight' style={styles.view}>
                                        <TouchableOpacity
                                            onPress={() => { }} style={{ padding: 20 }}>
                                            <Icon name="star-half-full" color="#616161" size={35} style={styles.icon} />
                                            <Text style={styles.text}>Câu làm gần đây</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center' }}>
                                    <Animatable.View delay={200} animation='bounceInLeft' style={styles.view}>
                                        <TouchableOpacity onPress={() => {}} style={{ padding: 20 }}>
                                            <Icon name="times-circle" color="#616161" size={35} style={styles.icon} />
                                            <Text style={styles.text}>Câu trả lời sai</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                </View>
                        </View>
                    </View>


                </View>
            </SafeAreaView>
        )
    }
}

export default ReviewTab
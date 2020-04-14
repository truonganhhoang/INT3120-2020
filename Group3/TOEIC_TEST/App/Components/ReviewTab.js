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
            <SafeAreaView style={{ flex: 1, backgroundColor: this.props.darkMode == false ? "#EEEEEE" : "#212121" }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.props.darkMode == false ? "#1976D2" : "#263238"
                }}>
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
                                <Animatable.View delay={200} animation='bounceInLeft'
                                    style={{
                                        backgroundColor: this.props.darkMode == false ? "#F5F5F5" : "#263238",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1 / 2,
                                        margin: 5
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => { }} style={{ padding: 20 }}>
                                        <Icon name="heart" color={this.props.darkMode == false ? "#616161" : "#EEEEEE"} size={30} style={styles.icon} />
                                        <Text style={{
                                            color: this.props.darkMode == false ? "#616161" : "#EEEEEE",
                                            textAlign: 'center',
                                            paddingTop: 5,
                                            width: 80,
                                            height: 40,
                                            fontSize: 14,
                                        }}>Câu yêu thích</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                                <Animatable.View delay={200} animation='bounceInRight'
                                    style={{
                                        backgroundColor: this.props.darkMode == false ? "#F5F5F5" : "#263238",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1 / 2,
                                        margin: 5
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('TestRecent')} style={{ padding: 20 }}>
                                        <Icon name="star-half-full" color={this.props.darkMode == false ? "#616161" : "#EEEEEE"} size={35} style={styles.icon} />
                                        <Text style={{
                                            color: this.props.darkMode == false ? "#616161" : "#EEEEEE",
                                            textAlign: 'center',
                                            paddingTop: 5,
                                            width: 80,
                                            height: 40,
                                            fontSize: 14,
                                        }}>Câu làm gần đây</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center' }}>
                                <Animatable.View delay={200} animation='bounceInLeft'
                                    style={{
                                        backgroundColor: this.props.darkMode == false ? "#F5F5F5" : "#263238",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1 / 2,
                                        margin: 5
                                    }}>
                                    <TouchableOpacity onPress={() => { }} style={{ padding: 20 }}>
                                        <Icon name="times-circle" color={this.props.darkMode == false ? "#616161" : "#EEEEEE"} size={35} style={styles.icon} />
                                        <Text style={{
                                            color: this.props.darkMode == false ? "#616161" : "#EEEEEE",
                                            textAlign: 'center',
                                            paddingTop: 5,
                                            width: 80,
                                            height: 40,
                                            fontSize: 14,
                                        }}>Câu trả lời sai</Text>
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
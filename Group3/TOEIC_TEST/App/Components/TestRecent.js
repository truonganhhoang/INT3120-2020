import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from './Styles/TestRecentStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { requestGET, HOST } from '../Services/Servies';
import DeviceInfo from 'react-native-device-info';
import Carousel from 'react-native-snap-carousel'

export default class TestRecent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
            data: [],
        };
    }
    componentDidMount() {
        this.getTheme()
        this.fetchData()
    }
    getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('theme')
            if (value === 'true') this.setState({ darkMode: true })
            else if (value === 'false') this.setState({ darkMode: false })
        } catch (e) { console.log(e) }
    }
    fetchData = async () => {
        const id = this.props.navigation.getParam("id").toString()
        const data = await requestGET(`${HOST}/tests/viewDoneAnswer/${id}?client_id=${DeviceInfo.getDeviceId()}`)
        this.setState({ data: data.data.questions })
    }
    setColor(data) {
        if (data.is_correct == true) return "#5C6BC0"
        else {
            if (data.is_chosen == true) return "#b71c1c"
            else return "#9DD6EB"
        }
    }
    renderItem = ({ item, index }) => {
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: this.state.darkMode === false ? "#F5F5F5" : "#263238",
                width: Dimensions.get("window").width - 30,
                marginVertical: 6,
                marginHorizontal: 15,
                elevation: 5,
                padding: 20,
                borderRadius: 10,
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        borderRadius: 20,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 100,
                        backgroundColor: '#9DD6EB'
                    }}>
                        <Text style={styles.text}>{item.id}/{this.state.data.length}</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 50, paddingBottom: 50 }}>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[0]),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[0].content}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[1]),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[1].content}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[2]),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[2].content}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[3]),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[3].content}</Text>
                </View>
            </ScrollView >
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.state.darkMode === false ? '#EEEEEE' : '#212121' }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.state.darkMode === false ? '#1976D2' : '#263238',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-round-back" size={27} color="#F5F5F5" style={styles.iconLeft} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam("name")}</Text>
                    <Icon name="search" size={27} color="transparent" containerStyle={styles.iconRight} />
                </View>

                <Carousel
                    ref={(c) => { this._carousel = c }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    sliderWidth={1000}
                    itemWidth={1000}
                    layout={'tinder'}
                    layoutCardOffset={`10`}
                />
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{
                            backgroundColor: '#1976D2', borderRadius: 40, height: 20, width: 20,
                        }} />
                        <Text style={styles.note}>Câu đúng</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{
                            backgroundColor: '#b71c1c', borderRadius: 40, height: 20, width: 20,
                        }} />
                        <Text style={styles.note}>Câu sai</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{
                            backgroundColor: '#9DD6EB', borderRadius: 40, height: 20, width: 20,
                        }} />
                        <Text style={styles.note}>Không chọn</Text>
                    </View>
                </View>



            </SafeAreaView>
        );
    }
}


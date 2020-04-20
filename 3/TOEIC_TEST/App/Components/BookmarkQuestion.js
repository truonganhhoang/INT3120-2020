import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, ToastAndroid } from 'react-native';
import styles from './Styles/TestRecentStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { requestGET, requestPOST, HOST } from '../Services/Servies';
import DeviceInfo from 'react-native-device-info';
import Carousel from 'react-native-snap-carousel'
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'

export default class BookmarkQuestion extends Component {
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
        const data = await requestGET(`${HOST}/tests/viewBookmarkQuestion/${id}?client_id=${DeviceInfo.getDeviceId()}`)
        this.setState({ data: data.data.questions })
    }

    deleteBookmark = async (id) => {
        var dataDetele = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: id,//id của từ
            item_type: 3,//từ trong bài học
            bookmark_type: 1,//ưa thích
        }
        var postData = await requestPOST(`${HOST}/bookmarks/deleteBookmark`, dataDetele).then(res => { return res })
        ToastAndroid.show("Đã xóa đánh dấu", ToastAndroid.SHORT)
        this.fetchData()
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.question}>
                        <Text style={styles.text}>{item.id}/{this.state.data.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.deleteBookmark(item.id)}
                    >
                        <Icon name="trash-o" size={36} color="#9DD6EB" />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 50, paddingBottom: 50 }}>
                    <Text style={{
                        fontSize: 19,
                        fontWeight: "bold",
                        color: this.state.darkMode === false ? "#212121" : "#F5F5F5"
                    }}>{item.content}</Text>
                </View>
                <View style={{
                    backgroundColor: "#9DD6EB",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[0].content}</Text>
                </View>
                <View style={{
                    backgroundColor: "#9DD6EB",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[1].content}</Text>
                </View>
                <View style={{
                    backgroundColor: "#9DD6EB",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <Text style={styles.option1}>{item.answers[2].content}</Text>
                </View>
                <View style={{
                    backgroundColor: "#9DD6EB",
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookmarkQuestionList')}>
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
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <Banner
                        unitId={UNIT_ID_BANNER}
                        size={"SMART_BANNER"}
                        request={adService.buildRequest().build()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}


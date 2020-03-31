import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/LearnTabStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    ImageBackground,
    Image,
    Dimensions,
    ToastAndroid
} from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { words } from '../Data/word'
import { learn } from '../Data/learn'
import Modal from 'react-native-modal'
import Tts from 'react-native-tts'
import DeviceInfo from 'react-native-device-info'
import { requestGET, requestPOST, HOST } from '../Services/Servies'

export default class LearnTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            data: [],
            visibleModal: false,
            detail: [],
            visibleModal2: false,
            detail2: [],
            deviceId: '',
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
        this.setState({ selectedIndex: 0 })
        this.fetchLession()
    }
    fetchLession = async () => {
        this.setState({ data: [] })
        let data = await requestGET(`${HOST}/lessons/listLesson/client_id=${DeviceInfo.getDeviceId()}`)
        this.setState({ data: data.data.list_lessons })
    }
    fetchBookmark = async () => {
        this.setState({ data: [] })
        let data = await requestGET(`${HOST}/lessons/listLesson?client_id=${DeviceInfo.getDeviceId()}`)
        this.setState({ data: data.data.list_bookmarks })
    }
    fetchRemind = async () => {
        this.setState({ data: [] })
        let data = await requestGET(`${HOST}/lessons/listLesson?client_id=${DeviceInfo.getDeviceId()}`)
        this.setState({ data: data.data.list_reminds })
    }
    deleteBookmark = async (id) => {
        var dataDetele = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 1,//ưa thích
        }
        var postData = await requestPOST(`${HOST}/bookmarks/deleteBookmark`, dataDetele).then(res => { return res })
        this.setState({ visibleModal: false })
        this.fetchBookmark()
        ToastAndroid.show("Đã xóa đánh dấu", ToastAndroid.SHORT)
    }
    deleteRemind = async (id) => {
        var dataDetele = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 2,//ghi nhớ
        }
        var postData = await requestPOST(`${HOST}/bookmarks/deleteBookmark`, dataDetele).then(res => { return res })
        this.setState({ visibleModal2: false })
        this.fetchRemind()
        ToastAndroid.show("Đã xóa ghi nhớ", ToastAndroid.SHORT)
    }
    bookmark = async (id) => {
        var newBookmark = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 1,//ưa thích
        }
        var postData = await requestPOST(`${HOST}/bookmarks/bookmark`, newBookmark).then(res => { return res })
        this.setState({ visibleModal2: false })
        ToastAndroid.show("Đã đánh dấu", ToastAndroid.SHORT)
    }
    remind = async (id) => {
        var newRemind = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 2,//ghi nhớ
        }
        var postData = await requestPOST(`${HOST}/bookmarks/bookmark`, newRemind).then(res => { return res })
        console.log("post remind: " + postData.status)
        this.setState({ visibleModal: false })
        ToastAndroid.show("Đã ghi nhớ", ToastAndroid.SHORT)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex: selectedIndex })
        if (selectedIndex === 0) {
            this.fetchLession()
        }
        else if (selectedIndex === 1) {
            this.fetchBookmark()
        }
        else if (selectedIndex === 2) {
            this.fetchRemind()
        }
    }
    renderItem = ({ item, index }) => {
        var url = `${item.thumbnail}`
        return (
            <Animatable.View delay={index * 300} animation='zoomInLeft' >
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("LearnWord", { id: item.id, name: item.name }) }}
                >
                    <View style={styles.item}>
                        <Image
                            style={{ height: 150, flex: 1 }}
                            source={{ uri: url }}
                        />
                        <Text style={styles.lession}>{item.name}</Text>
                        <Text style={styles.number}>Số từ vựng: {item.numb_words}</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    renderItem1 = ({ item, index }) => {
        var url = `${item.thumbnail}`
        return (
            <Animatable.View animation='zoomIn' >
                <TouchableOpacity
                    onPress={() => { this.setState({ detail: item, visibleModal: true }) }}
                >
                    <View style={styles.item2}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={{ uri: url }}
                                style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center', width: Dimensions.get("screen").width - 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.word}</Text>
                            <Text>[{item.sound}]</Text>
                            <Text >{item.meaning}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    renderItem2 = ({ item, index }) => {
        var url = `${item.thumbnail}`
        return (
            <Animatable.View delay={index * 110} animation='zoomInRight' >
                <TouchableOpacity
                    onPress={() => { this.setState({ detail2: item, visibleModal2: true }) }}
                >
                    <View style={styles.item2}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={{ uri: url }}
                                style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center', width: Dimensions.get("screen").width - 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.word}</Text>
                            <Text>[{item.sound}]</Text>
                            <Text>{item.meaning}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    renderBody = (selectedIndex) => {
        if (selectedIndex === 0)
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
            )
        else if (selectedIndex === 1)
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem1}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Modal
                        onBackdropPress={() => this.setState({ visibleModal: false })}
                        backdropTransitionOutTiming={0}
                        isVisible={this.state.visibleModal}
                        style={{ margin: 0 }}
                        hideModalContentWhileAnimating={true}>
                        {this.renderModalContent1()}
                    </Modal>
                </SafeAreaView>
            )
        else if (selectedIndex === 2)
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Modal
                        onBackdropPress={() => this.setState({ visibleModal2: false })}
                        backdropTransitionOutTiming={0}
                        isVisible={this.state.visibleModal2}
                        style={{ margin: 0 }}
                        hideModalContentWhileAnimating={true}>
                        {this.renderModalContent2()}
                    </Modal>
                </SafeAreaView>
            )
    }
    renderModalContent1 = () => { //Modal Bookmark
        const { detail, visibleModal } = this.state
        if (visibleModal) {
            console.log(detail.id)
            return (
                <View style={styles.containerModal}>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(`${detail.word}`) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='volume-up' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Phát âm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.remind(detail.id) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='clock-o' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Nhắc nhở</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.deleteBookmark(detail.id) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name="inbox" size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Xóa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    renderModalContent2 = () => { // Modal Remind
        const { detail2, visibleModal2 } = this.state
        if (visibleModal2) {
            return (
                <View style={styles.containerModal}>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(`${detail2.word}`) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='volume-up' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Phát âm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.bookmark(detail2.id) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='heart' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Đánh giấu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.deleteRemind(detail2.id) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name="inbox" size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Xóa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        const buttons = ['Bài học', 'Từ đánh dấu', 'Từ nhắc nhở']
        const { selectedIndex } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.linearGradient}>
                    <Icon name='search' size={24} type='FontAwesome' color='transparent' />
                    <Text style={styles.title}>TỪ VỰNG TOEIC</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Search') }}
                    >
                        <Icon name='search' size={24} type='FontAwesome' color='#F5F5F5'
                            style={styles.iconRight}
                        />
                    </TouchableOpacity>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 40, borderRadius: 20 }}
                />
                {this.renderBody(selectedIndex)}
            </SafeAreaView >
        )
    }
}

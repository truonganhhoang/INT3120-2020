import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/LearnWordStyles'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image,
    FlatList,
    Dimensions,
    ToastAndroid,

} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackActions, NavigationActions } from 'react-navigation'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import Tts from 'react-native-tts'
import DeviceInfo from 'react-native-device-info'
import { requestGET, requestPOST, HOST } from '../Services/Servies'
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'
import AsyncStorage from '@react-native-community/async-storage';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainBody' })],
})
class LearnWord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            visibleModal: false,
            detail: [],
            data: [],
            deviceId: '',
            id: '',
            darkMode: false,
        }
    }
    componentDidMount() {
        this.getTheme()
        this.fetchListLessionId()
    }
    fetchListLessionId = async () => {
        let id = this.props.navigation.getParam('id').toString()
        let listLessionId = await requestGET(`${HOST}/lessons/viewLesson/${id}`)
        this.setState({ data: listLessionId.data.grammars })
    }
    getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('theme')
            if (value === 'true') this.setState({ darkMode: true })
            else if (value === 'false') this.setState({ darkMode: false })
        } catch (e) { console.log(e) }
    }
    Back = () => {
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate("MainBody")
    }

    renderItem = ({ item }) => {
        var url = `${item.thumbnail}`
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { this.setState({ detail: item, visibleModal: true, id: item.id }) }}
                >
                    <View style={{
                        flex: 1,
                        width: Dimensions.get("window").width - 30,
                        flexDirection: 'row',
                        backgroundColor: this.state.darkMode === false ? "#F5F5F5" : '#263238',
                        marginVertical: 6,
                        marginHorizontal: 15,
                        elevation: 5,
                    }}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={{ uri: url }}
                                style={{ width: 150, flex: 1, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center', width: Dimensions.get("screen").width - 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: this.state.darkMode === false ? "#212121" : "#FAFAFA" }}>{item.word}</Text>
                            <Text style={{ color: this.state.darkMode === false ? "#212121" : "#E0E0E0" }}>{item.sound}</Text>
                            <Text style={{ color: this.state.darkMode === false ? "#212121" : "#E0E0E0" }}>{item.meaning}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderModalContent = () => {
        const { detail, visibleModal } = this.state
        if (visibleModal) {
            return (
                <View style={{
                    backgroundColor: this.state.darkMode === false ? "#EEEEEE" : "#212121",
                    justifyContent: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    margin: 20,
                    minHeight: 100,
                    padding: 30
                }}>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(`${detail.word}`) }}
                    >
                        <View style={{
                            backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238",
                            padding: 10,
                            margin: 10,
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name='volume-up' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 40, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Phát âm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.bookmark() }}
                    >
                        <View style={{
                            backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238",
                            padding: 10,
                            margin: 10,
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name='heart' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 40, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Đánh dấu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { this.remind() }}
                    >
                        <View style={{
                            backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238",
                            padding: 10,
                            margin: 10,
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name='clock-o' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 40, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Nhắc nhở</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    bookmark = async () => {
        var newBookmark = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: this.state.id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 1,//ưa thích
        }
        var postData = await requestPOST(`${HOST}/bookmarks/bookmark`, newBookmark).then(res => { return res })
        this.setState({ visibleModal: false })
        ToastAndroid.show("Đã đánh dấu", ToastAndroid.SHORT)
    }
    remind = async () => {
        var newRemind = {
            client_id: DeviceInfo.getDeviceId(),
            item_id: this.state.id,//id của từ
            item_type: 2,//từ trong bài học
            bookmark_type: 2,//ghi nhớ
        }
        var postData = await requestPOST(`${HOST}/bookmarks/bookmark`, newRemind).then(res => { return res })
        console.log("post remind: " + postData.status)
        this.setState({ visibleModal: false })
        ToastAndroid.show("Đã ghi nhớ", ToastAndroid.SHORT)
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.state.darkMode === false ? "#EEEEEE" : "#212121" }}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238"
                }}>
                    <TouchableOpacity onPress={() => this.Back()}>
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
                    <Icon name='search' size={27} color='transparent' containerStyle={styles.iconRight} />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Modal
                    onBackdropPress={() => this.setState({ visibleModal: false })}
                    backdropTransitionOutTiming={0}
                    isVisible={this.state.visibleModal}
                    style={{ margin: 0 }}
                    hideModalContentWhileAnimating={true}>
                    {this.renderModalContent()}
                </Modal>
                <Banner
                    unitId={UNIT_ID_BANNER}
                    size={"SMART_BANNER"}
                    request={adService.buildRequest().build()}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                />
            </SafeAreaView>
        )
    }
}

export default LearnWord
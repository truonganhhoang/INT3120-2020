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
import { words } from '../Data/word'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import Tts from 'react-native-tts'
import DeviceInfo from 'react-native-device-info'
import { requestGET, requestPOST, HOST } from '../Services/Servies'
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainBody' })],
})
class LearnWord extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            visibleModal: false,
            detail: [],
            data: [],
            deviceId: '',
            id: '',
        }
    }
    componentDidMount() {
        this.fetchListLessionId()
    }
    fetchListLessionId = async () => {
        let id = this.props.navigation.getParam('id').toString()
        let listLessionId = await requestGET(`${HOST}/lessons/viewLesson/${id}`)
        this.setState({ data: listLessionId.data.grammars })
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
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={{ uri: url }}
                                style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center', width: Dimensions.get("screen").width - 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.word}</Text>
                            <Text>{item.sound}</Text>
                            <Text>
                                {item.meaning}</Text>
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
                        onPress={() => { this.bookmark() }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='heart' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Đánh dấu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { this.remind() }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='clock-o' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Nhắc nhở</Text>
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
        ToastAndroid.show("Đã đánh dấu",ToastAndroid.SHORT)
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
        ToastAndroid.show("Đã ghi nhớ",ToastAndroid.SHORT)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <View style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => this.Back()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            onPress={() => { this.Back() }}
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
            </SafeAreaView>
        )
    }
}

export default LearnWord
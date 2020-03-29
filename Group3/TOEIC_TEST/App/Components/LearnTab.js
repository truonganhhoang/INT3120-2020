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
    Image
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
        this.setState({ selectedIndex: 0, deviceId: DeviceInfo.getDeviceId() })
        this.fetchLession()
    }
    fetchLession = async () => {
        let data = await requestGET(`${HOST}/lessons/listLesson`)
        this.setState({ data: data.data })
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex: selectedIndex })
        if (selectedIndex === 0) {
            this.fetchLession()
        }
        else if (selectedIndex === 1) this.setState({ data: words })
        else if (selectedIndex === 2) this.setState({ data: words })
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
        var url = `${item.sourceImage}`
        return (
            <Animatable.View animation='zoomIn' >
                <TouchableOpacity
                    onPress={() => { this.setState({ detail: item, visibleModal: true }) }}
                >
                    <View style={styles.item2}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={require("../Images/Warranty.jpg")}
                                style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.en}</Text>
                            <Text>[{item.transcription}]</Text>
                            <Text>{item.vi}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    renderItem2 = ({ item, index }) => {
        var url = `${item.sourceImage}`
        return (
            <Animatable.View delay={index * 110} animation='zoomInRight' >
                <TouchableOpacity
                    onPress={() => { this.setState({ detail2: item, visibleModal2: true }) }}
                >
                    <View style={styles.item2}>
                        <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                            <Image source={require("../Images/marketing.jpg")}
                                style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, resizeMode: 'stretch' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.en}</Text>
                            <Text>[{item.transcription}]</Text>
                            <Text>{item.vi}</Text>
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
    renderModalContent1 = () => {
        const { detail, visibleModal } = this.state
        if (visibleModal) {
            return (
                <View style={styles.containerModal}>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(`${detail.en}`) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='volume-up' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Phát âm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.viewModal}>
                            <Icon name='clock-o' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Nhắc nhở</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.viewModal}>
                            <Icon name="inbox" size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Xóa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    renderModalContent2 = () => {
        const { detail2, visibleModal2 } = this.state
        if (visibleModal2) {
            return (
                <View style={styles.containerModal}>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(`${detail2.en}`) }}
                    >
                        <View style={styles.viewModal}>
                            <Icon name='volume-up' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Phát âm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.viewModal}>
                            <Icon name='heart' size={35} style={{ paddingLeft: 10, color: "#f0f0f0" }} />
                            <Text style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 18, color: '#FAFAFA' }}>Đánh giấu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
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

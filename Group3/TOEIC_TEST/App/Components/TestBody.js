import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestBodyStyles'
import { requestGET, HOST } from '../Services/Servies'
import DeviceInfo from 'react-native-device-info'

class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            data2: [],
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        var deviceId = DeviceInfo.getDeviceId()
        var id = this.props.navigation.getParam('id').toString()
        var newData = await requestGET(`${HOST}/tests/viewExercise/${id}?client_id=${deviceId}`)
        this.setState({ data: newData.data.questions })
    }
    setVisibleA = (item, index) => {
        if (item.answers[0].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = true
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = true
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleB = (item, index) => {
        if (item.answers[1].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[1].visible = true
            newData[index].answers[0].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = true
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleC = (item, index) => {
        if (item.answers[2].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = true
            newData[index].answers[3].visible = false
            newData[index].visible = true
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleD = (item, index) => {
        if (item.answers[3].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = true
            newData[index].visible = true
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            this.setState({ data: newData })
        }
    }
    setColor(color) {
        if (color == true) return '#4CAF50'
        else if (color == false) return '#9DD6EB'
    }
    renderItem = ({ index, item }) => {
        return (
            <ScrollView style={styles.containerFlatList}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.question}>
                        <Text style={styles.text}>{item.id}/{this.state.data.length}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Icon name="star" size={36} color="#9DD6EB" style={styles.iconStart} />
                        <Icon name="bookmark" size={36} color="#9DD6EB" style={styles.iconBookmark} />
                    </View>
                </View>
                <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[0].visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleA(item, index)}>
                        <Text style={styles.option1}>{item.answers[0].content}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[1].visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleB(item, index)}>
                        <Text style={styles.option1}>{item.answers[1].content}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[2].visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleC(item, index)}>
                        <Text style={styles.option1}>{item.answers[2].content}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.answers[3].visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleD(item, index)}>
                        <Text style={styles.option1}>{item.answers[3].content}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

        )
    }
    renderItem2 = ({ item, index }) => {
        console.log(item.visible)
        return (
            <View style={{
                flex: 1,
                backgroundColor: item.visible === true ? '#9DD6EB' : '#F5F5F5',
                marginVertical: 10,
                marginHorizontal: 10,
                elevation: 3,
                borderRadius: 10,
                padding: 15,
            }}>
                <Text>{item.id}</Text>
            </View >
        )

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam('description')}</Text>
                    <Icon name='search' size={27} color='transparent' />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.toString()}
                    horizontal={true}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem2}
                        keyExtractor={(item, index) => item.toString()}
                        horizontal={true}
                    />
                </View>

                <View style={styles.submit}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default TestBody
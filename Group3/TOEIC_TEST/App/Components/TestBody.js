import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestBodyStyles'
import { requestGET, HOST } from '../Services/Servies'
import DeviceInfo from 'react-native-device-info'
import Carousel from 'react-native-snap-carousel'
class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            data2: [],
            question_id: [],
            answer_id: [],
            done_answers: [],
        }
    }
    componentDidMount() {
        this.fetchData();
        var newData = []
        var done_answer = [
            {
                question_id:'question_id',
                answer_id:'answer_id'
            }
        ]   
        newData.push(done_answer)
        // newData.push(done_answer)   
        console.log(newData)
    }

    fetchData = async () => {
        var deviceId = DeviceInfo.getDeviceId()
        var id = this.props.navigation.getParam('id').toString()
        var newData = await requestGET(`${HOST}/tests/viewExercise/${id}?client_id=${deviceId}`)
        this.setState({ data: newData.data.questions })
    }
    submit = () => {
        var data = new FormData();
        // var uri = i.uri
        // var namevideo = uri.substr(-20,20)
        // arr = arr + "<media><type>Video</type><name>"+ namevideo +"</name><base64>"+ "/gopy/Video/test/" +"</base64></media>"
        // data.append("File", {
        //     uri: i.uri,
        //     name: namevideo,
        //     type: i.type
        // });
        // data.append("site","gopy");
        // data.append("doclib","Video");
        //append(key,value)
        // var question_id = [1, 2]
        // client_id
        // 
        // console.log(this.state.question_id)
        // data.append('client_id', 'sm6150')
        // console.log(data)
        // console.log(this.state.done_answers)
    }
    setVisibleA = (item, index) => {
        if (item.answers[0].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = true
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = true
            console.log("A: " + newData[index].answers[0].id)
            var id = [...this.state.question_id]
            id.push(newData[index].answers[0].id)
            this.setState({ question_id: id })
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
            console.log("B: " + newData[index].answers[1].id)
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
            console.log("C: " + newData[index].answers[2].id)
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
            console.log("D: " + newData[index].answers[3].id)
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
                {/* <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.toString()}
                    horizontal={true}
                /> */}
                <Carousel
                    ref={(c) => { this._carousel = c }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    sliderWidth={1000}
                    itemWidth={1000}
                    layout={'tinder'}
                    layoutCardOffset={`10`}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem2}
                        keyExtractor={(item, index) => item.toString()}
                        horizontal={true}
                    />
                </View>
                <TouchableOpacity onPress={() => this.submit()}>
                    <View style={styles.submit}>
                        <Text style={styles.text}>Submit</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

export default TestBody


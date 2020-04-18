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
import { requestGET, HOST, requestPOST } from '../Services/Servies'
import DeviceInfo from 'react-native-device-info'
import Carousel from 'react-native-snap-carousel'
import { StackActions, NavigationActions } from 'react-navigation'
import Modal from 'react-native-modal'
import { PieChart } from "react-native-chart-kit"
const screenWidth = Dimensions.get("window").width

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'TestList' })],
})
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            exercise_id: [],
            done_answers: [],
            data2: [],
            visibleModal: false,
            data3: [],
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    Back = () => {
        this.setState({ visibleModal: false })
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate('TestList', { name: this.state.data2.description, id: this.state.data2.id })
    }

    fetchData = async () => {
        var deviceId = DeviceInfo.getDeviceId()
        var id = this.props.navigation.getParam('id').toString()
        var newData = await requestGET(`${HOST}/tests/viewExercise/${id}?client_id=${deviceId}`)
        this.setState({ data: newData.data.questions, data2: newData.data.exercise })
    }
    submit = async () => {
        var data = {
            client_id: DeviceInfo.getDeviceId(),
            exercise_id: this.state.exercise_id,
            done_answers: this.state.done_answers
        }
        var postData = await requestPOST(`${HOST}/tests/submitExercise`, data).then(res => { return res })
        var result = [
            {
                name: "câu đúng",
                data: postData.data.correct_answers,
                color: "#004D40",
                legendFontColor: "#004D40",
                legendFontSize: 10
            },
            {
                name: "câu sai",
                data: postData.data.incorrect_answers,
                color: "#b71c1c",
                legendFontColor: "#b71c1c",
                legendFontSize: 10
            },
            {
                name: "câu chưa trả lời",
                data: postData.data.not_done_answers,
                color: "#1A237E",
                legendFontColor: "#1A237E",
                legendFontSize: 10
            }
        ]
        this.setState({ visibleModal: true, data3: result })
    }
    renderModalContent = () => {
        const { visibleModal } = this.state
        if (visibleModal) {
            return (
                <View style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    margin: 10,
                    minHeight: 100,
                    padding: 10,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center', padding: 20 }}>Kết quả</Text>
                    <PieChart
                        data={this.state.data3}
                        width={screenWidth}
                        height={180}
                        chartConfig={chartConfig}
                        accessor="data"
                        backgroundColor="transparent"
                        padding="20"
                        absolute
                    />
                </View>
            )
        }
    }

    setVisibleA = (item, index) => {
        if (item.answers[0].visible == false) {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = true
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = true
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[0].id && i.question_id !== item.id))
            answer.push({
                question_id: item.id,
                answer_id: newData[index].answers[0].id
            })
            this.setState({ data: newData, done_answers: answer })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[0].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[1].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[2].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[3].id && i.question_id !== item.id))
            this.setState({ data: newData, done_answers: answer })
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
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[1].id && i.question_id !== item.id))
            answer.push({
                question_id: item.id,
                answer_id: newData[index].answers[1].id
            })
            this.setState({ data: newData, done_answers: answer })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[0].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[1].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[2].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[3].id && i.question_id !== item.id))
            this.setState({ data: newData, done_answers: answer })

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
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[2].id && i.question_id !== item.id))
            answer.push({
                question_id: item.id,
                answer_id: newData[index].answers[2].id
            })
            this.setState({ data: newData, done_answers: answer })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[0].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[1].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[2].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[3].id && i.question_id !== item.id))
            this.setState({ data: newData, done_answers: answer })
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
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[3].id && i.question_id !== item.id))
            answer.push({
                question_id: item.id,
                answer_id: newData[index].answers[3].id
            })
            this.setState({ data: newData, done_answers: answer })
        }
        else {
            var newData = [...this.state.data]
            newData[index].answers[0].visible = false
            newData[index].answers[1].visible = false
            newData[index].answers[2].visible = false
            newData[index].answers[3].visible = false
            newData[index].visible = false
            var answer = [...this.state.done_answers]
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[0].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[1].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[2].id && i.question_id !== item.id))
            answer = answer.filter(i => (i.answer_id !== newData[index].answers[3].id && i.question_id !== item.id))
            this.setState({ data: newData, done_answers: answer })
        }
    }
    setColor(color) {
        if (color == true) return '#4CAF50'
        else if (color == false) return '#9DD6EB'
    }
    renderItem = ({ index, item }) => {
        this.setState({ exercise_id: item.exercise_id })
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
                padding: 10,
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
                        onPress={() => this.Back()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam('description')}</Text>
                    <Icon name='search' size={27} color='transparent' />
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
                <Modal
                    onBackdropPress={() => this.Back()}
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

export default TestBody

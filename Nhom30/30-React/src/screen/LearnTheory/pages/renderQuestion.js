import React from 'react'
import Swiper from 'react-native-swiper'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RenderAnswer from './renderAnswer'

export default class RenderQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            indexQuestion: 1,
            index: 0,
            isAllCorrect:false
        }
        this.isShowDescription = 0
    }


    renderItem = (item) => {
        let answers = []
        for (let i = 0; i < item.answers.length; i++) {
            answers.push(<RenderAnswer item={item.answers[i]} data={item} parent={this} />)
        }
        return (
            <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ fontWeight: 'bold', }}>{item.question}</Text>
                <View style={{ borderColor: 'transparent', borderWidth: 0.5, borderBottomColor: '#c3c3c3', borderTopColor: '#c3c3c3', marginTop: 10, marginBottom: 10 }}>
                    {answers}
                </View>
                {this.isShowDescription == item.correct_answer.length && this.state.isAllCorrect && this.renderDescription(item)}
            </View>
        )
    }

    handleSwipePage = (index) => {
        if (index == 1) {
            this.setState({ index: this.state.index - 1 })
            this.isShowDescription = 0
        }
        else {
            this.setState({ index: this.state.index + 1 })
            this.isShowDescription = 0
        }
    }
    renderControlBar = () => {
        return (
            <View style={{ width: '100%', height: 50, backgroundColor: 'green', position: 'absolute', bottom: 0,  flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%', borderColor: 'green', borderRightColor: '#c3c3c3', borderWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => this.handleSwipePage(1)} disabled={this.state.index == 0 ? true : false}>
                        <Image
                            source={require('../../../../icon/icon_back.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}> Câu {this.state.indexQuestion}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%', borderColor: 'green', borderLeftColor: '#c3c3c3', borderWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => this.handleSwipePage(2)}>
                        <Image
                            source={require('../../../../icon/icon_forward.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    renderDescription = (item) => {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../../../icon/icon_information.png')}
                        style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>GIẢI THÍCH ĐÁP ÁN</Text>
                </View>
                <View style={{ width: '100%', backgroundColor: '#c5e1a6', padding: 10, borderRadius: 10, marginTop: 10 }}>
                    <Text style={{ color: 'gray' }}>{item.description}</Text>
                    <Text style={{ color: 'gray' }}>Câu này chọn đáp án là: {item.correct_answer.length > 1 ? `${item.correct_answer[0]} và ${item.correct_answer[1]}` : item.correct_answer}</Text>
                </View>

            </View>
        )
    }
    render() {
        if (!this.props.dataQuestion.questions) return null
        let swiperQuestions = []
        for (let i = 0; i < this.props.dataQuestion.questions.length; i++) {
            swiperQuestions.push(this.renderItem(this.props.dataQuestion.questions[i]))
        }
        return (
            <View style={{ width: '100%', height: '100%', paddingTop:20 }}>
                <Swiper
                    loop={false}
                    index={this.state.index}
                    activeDotStyle={{ backgroundColor: 'transparent' }}
                    height={700}
                    horizontal={true}
                    onIndexChanged={index => {
                        this.setState({ indexQuestion: index + 1 })
                        this.isShowDescription = 0
                    }}
                    showsPagination={false}
                >
                    {swiperQuestions}
                </Swiper>
                {this.renderControlBar()}
            </View>
        )
    }
}
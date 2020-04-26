import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class RenderAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChoose: false,
            isCorrect: false
        }
    }
    handleChoose = (item, data) => {
        for (let i = 0; i < data.correct_answer.length; i++) {
            if (item.id == data.correct_answer[i]) {
                this.setState({
                    isChoose: true,
                    isCorrect: true
                })
                this.props.parent.isShowDescription++
                this.props.parent.setState({isAllCorrect:true})
                return
            }
            else {
                this.setState({ isChoose: !this.state.isChoose, isCorrect: false })
                this.props.parent.setState({isAllCorrect:!this.props.parent.state.isAllCorrect})
            }
        }
    }

    render() {
        let { item } = this.props
        let { data } = this.props
        return (
            <TouchableOpacity onPress={() => this.handleChoose(item, data)} disabled={this.state.isCorrect}>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 5, }}>
                    <View style={{ width: '10%', height: 35, backgroundColor: this.state.isChoose ? (this.state.isCorrect ? 'green' : 'orange') : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                        <Text style={{ fontWeight: 'bold', color: this.state.isChoose ? (this.state.isCorrect ? 'white' : 'red') : 'black' }}>{item.id}</Text>
                    </View>
                    <View style={{ paddingLeft: 10, width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: this.state.isChoose ? (this.state.isCorrect ? 'green' : 'red') : 'black' }}>{item.answer}</Text>
                        </View>
                        <View style={{ width: '10%', paddingLeft:5 }}>
                            <Image
                                source={this.state.isChoose ? this.state.isCorrect ? require('../../../../icon/icon_correct.png') : require('../../../../icon/icon_wrong.png') : ''}
                                style={{ width: 15, height: 15 }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
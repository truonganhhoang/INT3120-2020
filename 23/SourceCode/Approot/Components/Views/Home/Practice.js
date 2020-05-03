// Core
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'

//Style
import { practice, tag, header } from '../../../assets/Styles/Home/practice';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Tag({ uri, title, content }) {
    return (
        <View style={tag.container}>
            <View style={tag.iconSection}>
                <Image
                    style={tag.icon}
                    source={uri}
                />
            </View>
            <View style={tag.contentSection}>
                <Text>{title}</Text>
                <Text>{content}</Text>
            </View>
        </View>
    );
}

export default class LessonTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={practice.container}>
                <View style={practice.header}>
                    <View style={header.tagSection}>
                        <Tag title='Câu' content='1/10' uri={require('../../../assets/Image/question.png')} />
                        <Tag title='Stop' content='10:12' uri={require('../../../assets/Image/clock.png')} />
                        <Tag title='Chính xác' content='0' uri={require('../../../assets/Image/tick.png')} />
                    </View>
                    <TouchableOpacity style={header.iconSection}>
                        <Image
                            style={header.icon}
                            source={require('../../../assets/Image/settings-inactive.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={practice.mainContent}>
                    <View style={practice.wordSection}>
                        <View>
                            <Text style={practice.wordText} >january</Text>
                            <Text style={practice.spellingText}>/djanjuueri/</Text>
                        </View>
                        <View>
                            <Image
                                style={tag.icon}
                                source={require('../../../assets/Image/speaker.png')}
                            />
                        </View>
                    </View>
                    <View style={practice.questionSection}>
                        <Text style={practice.question}>
                            Chọn nghĩa của từ đã cho
                        </Text>
                        <View style={practice.answerSection}>
                            <CheckBox
                                left
                                title='tháng Một, tháng giêng'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                            />
                            <CheckBox
                                left
                                title='chủ nhật'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                            />
                            <CheckBox
                                left
                                title='thứ sáu'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                            />
                            <CheckBox
                                left
                                title='Tháng 2'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

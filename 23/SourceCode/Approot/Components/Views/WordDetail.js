import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import { lesson1 } from '../../assets/Data/ListLesson/lesson1';

export default class WordDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: this.props.route.params.word,
            spelling: this.props.route.params.spelling,
            type: this.props.route.params.type,
            meaning: this.props.route.params.meaning,
            indexWord: 0,
            rememberButton: {
                title: 'Nhớ',
                pressStatus: false
            },
            lessonOrder: this.props.route.params.title,
        };
    }

    goToNextWord() {
        if (this.state.indexWord < lesson1.length - 1) {
            this.state.indexWord += 1;
            this.setState({
                word: lesson1[this.state.indexWord].word,
                spelling: lesson1[this.state.indexWord].spelling,
                type: lesson1[this.state.indexWord].type,
                meaning: lesson1[this.state.indexWord].meaning,
            });
            this.state.lessonOrder = (this.state.indexWord + 1) + '/15';
        }
    }

    goToPreviousWord() {
        if (this.state.indexWord > 0) {
            this.state.indexWord -= 1;
            this.setState({
                word: lesson1[this.state.indexWord].word,
                spelling: lesson1[this.state.indexWord].spelling,
                type: lesson1[this.state.indexWord].type,
                meaning: lesson1[this.state.indexWord].meaning,
            });
            this.state.lessonOrder = (this.state.indexWord + 1) + '/15';
        }
    }

    rememberWord() {
        this.state.rememberButton.title = 'Đã nhớ';
        this.state.rememberButton.pressStatus = true;
    }

    render() {
        return (
            <View style={wordDetail.container}>
                <View style={wordDetail.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                style={wordDetail.icon}
                                source={require('../../assets/Image/icon-back.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={wordDetail.text}>{this.state.lessonOrder}</Text>
                        <Text style={wordDetail.text}>Luyện tập</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Image
                            style={wordDetail.icon}
                            source={require('../../assets/Image/speaker-lesson.png')}
                        />
                    </View>
                </View>
                <View style={wordDetail.wordContainer}>
                    <Text style={wordDetail.textWord}>{this.state.word}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => alert('speak')}
                        >
                            <Image
                                style={wordDetail.icon}
                                source={require('../../assets/Image/speaker.png')}
                            />
                        </TouchableOpacity>
                        <Text style={wordDetail.textSpelling}>{this.state.spelling}</Text>
                    </View>
                    <Text style={wordDetail.textType}>{this.state.type}</Text>
                    <Text style={wordDetail.textMeaning}>{this.state.meaning}</Text>
                </View>
                <View style={wordDetail.whiteSpace}>

                </View>
                <View style={wordDetail.footer}>
                    <TouchableOpacity
                        onPress={() => this.goToPreviousWord()}
                        disabled={this.state.indexWord === 0}
                    >
                        <Image
                            style={wordDetail.icon}
                            source={this.state.indexWord === 0 ? require('../../assets/Image/arrow-left-inactive.png') : require('../../assets/Image/arrow-left.png')}
                        />
                    </TouchableOpacity>
                    <Button
                        onPress={() => this.rememberWord()}
                        style={this.state.rememberButton.pressStatus ? button.press : button.unPress}
                        title={this.state.rememberButton.title}
                    />
                    <TouchableOpacity
                        onPress={() => this.goToNextWord()}
                        disabled={this.state.indexWord === lesson1.length - 1}
                    >
                        <Image
                            style={wordDetail.icon}
                            source={this.state.indexWord === lesson1.length - 1 ? require('../../assets/Image/arrow-right-inactive.png') : require('../../assets/Image/arrow-right.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

let wordDetail = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        paddingHorizontal: 10,
    },
    wordContainer: {
        flex: 6,
        borderWidth: 1,
        borderColor: '#00BFFF',
        borderRadius: 5,
        margin: 10,
        padding: 5,
        height: '60%'
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
    },
    textSpelling: {
        color: 'black',
        fontSize: 24
    },
    textWord: {
        fontSize: 45,
        color: '#483D8B',
        fontWeight: 'bold',
    },
    textType: {
        color: '#00BFFF',
        fontSize: 24,
        marginLeft: 10
    },
    textMeaning: {
        fontSize: 24,
        color: 'black',
        marginLeft: 30
    },
    icon: {
        width: 32,
        height: 32,
        marginHorizontal: 10
    },
    whiteSpace: {
        flex: 3
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

const button = StyleSheet.create({
    unPress: {
        padding: 10
    },
    press: {
        padding: 10,
        backgroundColor: 'white',
        color: 'black'
    }
});


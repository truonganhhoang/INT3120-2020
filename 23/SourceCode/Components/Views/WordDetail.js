import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class WordDetail extends Component {

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
                                source={require('../../assets/Image/back-arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={wordDetail.text}>{this.props.route.params.title}</Text>
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
                    <Text style={wordDetail.textWord}>{this.props.route.params.word}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={wordDetail.icon}
                            source={require('../../assets/Image/speaker.png')}
                        />
                        <Text style={wordDetail.textSpelling}>{this.props.route.params.spelling}</Text>
                    </View>
                    <Text style={wordDetail.textType}>{this.props.route.params.type}</Text>
                    <Text style={wordDetail.textMeaning}>{this.props.route.params.meaning}</Text>
                </View>
                <View style={wordDetail.whiteSpace}>

                </View>
                <View style={wordDetail.footer}>

                    <Image
                        style={wordDetail.icon}
                        source={require('../../assets/Image/arrow-left.png')}
                    />
                    <Button
                        style={{ padding: 10 }}
                        title="Nhớ"
                    />
                    <Image
                        style={wordDetail.icon}
                        source={require('../../assets/Image/arrow-right.png')}
                    />

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
        color: '#00BFFF',
        fontSize: 24
    },
    textWord: {
        fontSize: 40,
        color: '#483D8B',
        fontWeight: 'bold',
    },
    textType: {
        textColor: 'gray',
        fontSize: 24,
        marginLeft: 10
    },
    textMeaning: {
        fontSize: 26,
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


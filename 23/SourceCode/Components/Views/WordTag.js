import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class WordTag extends Component {
    render() {
        return (
            <View style={word.container}>
                <View>
                    <Text style={word.textWord}>{this.props.word}</Text>
                    <Image
                        style={word.icon}
                        source={require('../../assets/Image/heart-inactive.png')}
                    />
                </View>
                <View>
                    <Text style={word.textSpelling}>{this.props.spelling}</Text>
                    <Image
                        style={word.icon}
                        source={require('../../assets/Image/speaker.png')}
                    />
                </View>
                <View>
                    <Text style={word.textType}>{this.props.type}</Text>
                </View>
                <View>
                    <Text style={word.textMeaning}>{this.props.meaning}</Text>
                </View>
                <TouchableOpacity>
                    <Text>Abc</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let word = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#00BFFF',
        borderRadius: 5,
        margin: 10,
        padding: 5,
        height: 200
    },
    textSpelling: {
        textColor: '#00BFFF',
    },
    textWord: {
        fontSize: 22,
        textColor: '#483D8B',
        fontWeight: 'bold',
    },
    textType: {
        textColor: 'gray'
    },
    textMeaning: {
        fontSize: 18,
        textColor: 'black'
    },
    icon: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 0
    }
});


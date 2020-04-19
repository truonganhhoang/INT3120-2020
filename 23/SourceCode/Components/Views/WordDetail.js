import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class WordDetail extends Component {

    render() {
        return (
            <View style={wordDetail.container}>
                
            </View>
        );
    }
}

let wordDetail = StyleSheet.create({
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


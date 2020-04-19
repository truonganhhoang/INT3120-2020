import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WordTag from './WordTag';

import { ScrollView } from 'react-native-gesture-handler';


const state = {
    names: [
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' },
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'Thứ tư, Thứ 4' }

    ]
}
export default function Lesson({ navigation }) {

    return (
        <View style={lesson.container}>
            <View style={lesson.header}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={lesson.icon}
                            source={require('../../assets/Image/back-arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={lesson.text}>Bài 2</Text>
                    <Text style={lesson.text}>Luyện tập</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Image
                        style={lesson.icon}
                        source={require('../../assets/Image/speaker-lesson.png')}
                    />
                </View>
            </View>

            <View style={lesson.content}>
                <ScrollView>
                    {
                        state.names.map((item, index) => (
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <WordTag
                                        word={item.word}
                                        spelling={item.spelling}
                                        type={item.type}
                                        meaning={item.meaning}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <WordTag
                                        word={item.word}
                                        spelling={item.spelling}
                                        type={item.type}
                                        meaning={item.meaning}
                                    />
                                </View>
                            </View>

                        ))
                    }
                </ScrollView>
            </View>

            <View style={lesson.footer}>
                <Text style={lesson.text}>HỌC NGAY
                    
                </Text>
                <Image
                        style={lesson.icon}
                        source={require('../../assets/Image/double-arrow-right.png')}
                />
            </View>
        </View>
    );
}

let lesson = StyleSheet.create({
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
    content: {
        flex: 10
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
        flexDirection: "row"
    },
    footerText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
    },
    icon: {
        width: 32,
        height: 32,
        marginHorizontal: 10
    }
});

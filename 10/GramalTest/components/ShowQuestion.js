import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ShowQuestion(props) {
    const { listQuestions, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}> {listQuestions[0].title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        //width: '80%',
        height: 90,
        //alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    title: {
        color: '#0d658d',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    },
})
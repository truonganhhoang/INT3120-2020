import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ShowAnwser(props) {
    const { listAnswers, onPress } = props;
    return (
        // <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View style={styles.contentAnswer}>
                    <Text style={styles.title}> A </Text>
                    <Text style={styles.title}> B </Text>
                    <Text style={styles.title}> C </Text>
                    <Text style={styles.title}> D </Text>
                </View>
        /* </TouchableOpacity> */
    );
}

const styles = StyleSheet.create({
    // container: {
    //     //width: '80%',
    //     //alignItems: 'center',
    //     //backgroundColor: 'black',
    //     borderRadius: 5,
    // },
    title: {
        color: 'black',
        paddingLeft: 10,
        paddingTop: 10
    },
    contentAnswer: {
        height: 50
    }
})
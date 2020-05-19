import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TestLession(props) {
    const { listTest, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.contentRow}>
                    <Text style={styles.title}>{listTest.title}</Text>
                    <Text style={styles.number}>{listTest.isDone}/{listTest.nQuestions} </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        //width: '80%',
        height: 90,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        borderLeftWidth: 6,
        borderLeftColor: '#0d658d'
    },
    title: {
        color: '#0d658d',
        fontWeight: 'bold',
        //paddingBottom: 10
        flex: 1
    },
    number: {
        color: '#0d658d',
        fontWeight: 'bold',
    },
    data: {
        color: '#8a8a8a'
    },
    contentRow: {
        paddingLeft: 12,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    margin: {
        width: 5,
        backgroundColor: 'steelblue'
    }
})